import React, { useImperativeHandle, useEffect, useState, useMemo } from 'react'
import { useEvent } from './useEvent'
import { ActiveAction, RegistrySymbol, useElementRegister, useBoardRegister } from './useKeyboardNavigator'
import { useValueGetter } from './useValueGetter'

type Props<T extends React.ElementType, P> = Omit<React.ComponentPropsWithRef<T>, keyof P> & { as: T } & Omit<P, 'as'>

type Component<P> = {
    <T extends React.ElementType>(props: Props<T, P>): JSX.Element | null;
    displayName?: string;
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

        const [elementRef, setElementRef] = useElementRegister(markRef, activeAction)

        useImperativeHandle(ref, () => elementRef)

        return <As {...asProps} ref={setElementRef} />
    }
)) as Component<KeyboardNavigatorElementProps>

KeyboardNavigatorElement.displayName = 'KeyboardNavigatorElement'

export type KeyboardNavigatorBoardProps = {
    markRef: RegistrySymbol,
    as: React.ElementType,
    active?: boolean,
    // if we explicitly passed the `active` prop, it means the `active` state of KeyboardNavigatorBoard is controlled by external, the `autoActive` prop is forced to `false`.
    // otherwise, the `autoActive` fallbacks to enabled.
    autoActive?: boolean,
    onAutoActiveChange?: (active: boolean) => void,
    // if `autoActive` feature enabled, the initial is used to determine the initial active state, it has the default value of `false`
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

        const [elementRef, setElementRef] = useBoardRegister(markRef, getActive)

        const handleAutoActiveChange = useEvent(
            (newAutoActive: boolean) => {
                setAutoActivated(newAutoActive)
                onAutoActiveChange?.(newAutoActive)
            } 
        )

        useImperativeHandle(ref, () => elementRef)

        useEffect(
            () => {
                if (!fixedAutoActive) {
                    return
                }

                function handleFocusOrClick (e: Event) {
                    const target = e.target

                    if (!(target instanceof Node)) {
                        return
                    }

                    if (elementRef === target || elementRef?.contains(target)) {
                        handleAutoActiveChange(true)
                    } else {
                        handleAutoActiveChange(false)
                    }
                }

                window.addEventListener('click', handleFocusOrClick)
                window.addEventListener('focus', handleFocusOrClick)


                return () => {
                    window.removeEventListener('click', handleFocusOrClick)
                    window.removeEventListener('focus', handleFocusOrClick)
                }
            },
            [elementRef, fixedAutoActive, handleAutoActiveChange],
        )

        return <As {...asProps} ref={setElementRef} />
    }
)) as Component<KeyboardNavigatorBoardProps>

KeyboardNavigatorBoard.displayName = 'KeyboardNavigatorBoard'
