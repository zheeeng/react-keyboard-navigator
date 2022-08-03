import React, { useImperativeHandle, useEffect, useState, useMemo } from 'react'
import { useEvent } from './hooks/useEvent'
import { ActiveAction, RegistrySymbol, useElementRegister, useBoardRegister } from './useKeyboardNavigator'
import { useValueGetter } from './hooks/useValueGetter'
import { useNextTickCallback } from './hooks/useNextTickCallback'

type Props<T extends React.ElementType, P> = Omit<React.ComponentPropsWithRef<T>, keyof P> & { as: T } & Omit<P, 'as'>

type Component<P> = {
    <T extends React.ElementType>(props: Props<T, P>): JSX.Element | null
    displayName?: string
}

export type KeyboardNavigatorElementProps = {
    markRef: RegistrySymbol,
    active?: boolean,
    onActiveChange?: (active: boolean) => void,
    as: React.ElementType,
}

export const KeyboardNavigatorElement = React.memo(React.forwardRef<Element | undefined, KeyboardNavigatorElementProps>(
    function KeyboardNavigatorElement({ markRef, active = false, onActiveChange = () => {/** pass */}, as: As, ...asProps }, ref) {
        const activeAction = useValueGetter<ActiveAction>([active, onActiveChange])

        const elementRef = useElementRegister(markRef, activeAction)

        useImperativeHandle(ref, () => elementRef.current)

        return <As {...asProps} ref={elementRef} />
    }
)) as Component<KeyboardNavigatorElementProps>

KeyboardNavigatorElement.displayName = 'KeyboardNavigatorElement'

export type KeyboardNavigatorBoardProps = {
    markRef: RegistrySymbol,
    as: React.ElementType,
    active?: boolean,
    // if we explicitly passed the `active` prop, it means the `active` state of KeyboardNavigatorBoard is controlled by external, the `autoActive` prop is forced to `false`.
    // Otherwise, the `autoActive` fallbacks to enabled.
    autoActive?: boolean,
    onAutoActiveChange?: (active: boolean) => void,
    // if the `autoActive` feature is enabled, the initial is used to determine the initial active state, it has the default value of `false`
    initialActive?: boolean,
}

export const KeyboardNavigatorBoard = React.memo(React.forwardRef<Element | undefined, KeyboardNavigatorBoardProps>(
    function KeyboardNavigatorBoard({
        markRef, as: As,
        active, autoActive, onAutoActiveChange, initialActive = false,
        ...asProps
    }, ref) {
        const fixedAutoActive = useMemo(() => active !== undefined ? false : autoActive ?? true, [active, autoActive])
        const [autoActivated, setAutoActivated] = useState(initialActive)

        const fixedActive = useMemo(() => active !== undefined ? active : autoActivated, [active, autoActivated])

        const getActive = useValueGetter(fixedActive)

        const elementRef = useBoardRegister(markRef, getActive)

        const handleAutoActiveChange = useEvent(
            (newAutoActive: boolean) => {
                setAutoActivated(newAutoActive)
                onAutoActiveChange?.(newAutoActive)
            } 
        )

        useImperativeHandle(ref, () => elementRef.current)

        const handleActiveElement = useEvent(
            (htmlElement: HTMLElement) => {
                if (elementRef.current === htmlElement || elementRef.current?.contains(htmlElement)) {
                    handleAutoActiveChange(true)
                } else {
                    handleAutoActiveChange(false)
                }
            }
        )

        const handleActiveElementNextTick = useNextTickCallback(
            () => {
                if (document.activeElement instanceof HTMLElement) {
                    handleActiveElement(document.activeElement)
                }
            }
        )

        useEffect(
            () => {
                if (!fixedAutoActive) {
                    return
                }

                function handleActive (e: MouseEvent | FocusEvent) {
                    const targetElement = e.target

                    if (targetElement instanceof HTMLElement) {
                        handleActiveElement(targetElement)
                    }
                }

                function handleKeyDown (e: KeyboardEvent) {
                    if (e.key === 'Tab') {
                        return
                    }
                    handleActiveElementNextTick()
                }

                document.body.addEventListener('click', handleActive)
                document.body.addEventListener('focus', handleActive)
                document.body.addEventListener('keydown', handleKeyDown)


                return () => {
                    document.body.removeEventListener('click', handleActive)
                    document.body.removeEventListener('focus', handleActive)
                    document.body.removeEventListener('keydown', handleKeyDown)
                }
            },
            [elementRef, fixedAutoActive, handleActiveElement, handleActiveElementNextTick, handleAutoActiveChange],
        )

        return <As {...asProps} ref={elementRef} />
    }
)) as Component<KeyboardNavigatorBoardProps>

KeyboardNavigatorBoard.displayName = 'KeyboardNavigatorBoard'
