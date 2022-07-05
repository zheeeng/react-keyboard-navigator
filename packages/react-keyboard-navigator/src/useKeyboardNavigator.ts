import { useEffect, useMemo, useRef, useState } from 'react'
import { createOpaqueTypeConstructor } from './OpaqueType'
import { useValueGetter } from './hooks/useValueGetter'
import { calculatePositionPoint } from './utils/calculatePositionPoint'
import { groupByDirection } from './utils/groupByDirection'
import { objectMap } from './utils/helper'
import { useEvent } from './hooks/useEvent'
import { DirectionKeyMap, DirectionMap, KeyboardDirection } from './types/type'
import { DirectionMapPresets } from './helpers/DirectionMapPresets'
import { StrategiesHelper } from './helpers/StrategiesHelper'

export type ActiveAction = [active: boolean, handleActiveChange: (active: boolean) => void]

const createRegistrySymbol = createOpaqueTypeConstructor(() => new Object())
export type RegistrySymbol = ReturnType<typeof createRegistrySymbol>

const elementRegistryWeakMap = new WeakMap<
    RegistrySymbol,
    {
        registerElement: (element: HTMLElement, getActiveAction: () => ActiveAction) => void,
        registerBoard: (element: HTMLElement, getActive: () => boolean) => void,
    }
>()

export type UseKeyboardNavigatorOption = {
    directionMap?: DirectionKeyMap | DirectionMap
    eventCallback?: (e: KeyboardEvent, eventInfo: { fromElement: HTMLElement, toElement: HTMLElement }) => void | false
    didChange?: (fromElement: HTMLElement, toElement: HTMLElement) => void
    rootContainer?: HTMLElement
}

export const useKeyboardNavigator = ({
    directionMap = DirectionMapPresets.ArrowDirectionMap.secant,
    eventCallback,
    didChange = () => {/** pass */},
    rootContainer,
}: UseKeyboardNavigatorOption = {}): {
    markRef: RegistrySymbol,
} => {
    const [{ elementManageBoardRegistry, activeActionRegistry }] = useState(
        () => ({
            elementManageBoardRegistry: new Map<HTMLElement, () => boolean>(),
            activeActionRegistry: new Map<HTMLElement, () => ActiveAction>()
        })
    )

    const [markRef] = useState(
        () => {
            const symbol = createRegistrySymbol()

            elementRegistryWeakMap.set(
                symbol,
                    {
                    registerBoard: (element: HTMLElement, getActive: () => boolean) => {
                        elementManageBoardRegistry.set(element, getActive)
            
                        return () => elementManageBoardRegistry.delete(element)
                    },
                    registerElement: (element: HTMLElement, getActiveAction: () => ActiveAction) => {
                        activeActionRegistry.set(element, getActiveAction)
            
                        return () => activeActionRegistry.delete(element)
                    },
                }
            )

            return symbol
        }
    )

    const getDirectionMap = useValueGetter(directionMap)

    const [eventInfo, setEventInfo] = useState<{ fromElement: HTMLElement, toElement: HTMLElement }>()

    const handleEventInfoUpdate = useEvent(didChange)

    useEffect(
        () => {
            if (eventInfo?.fromElement && eventInfo?.toElement) {
                handleEventInfoUpdate(eventInfo.fromElement, eventInfo.toElement)
            }
        },
        [handleEventInfoUpdate, eventInfo],
    )

    useEffect(
        () => {
            function handleKeyBoardEvent (e: KeyboardEvent) {
                const key = e.key

                const lookupMap = StrategiesHelper.secant(getDirectionMap(), true)

                const direction = (Object.keys(lookupMap) as KeyboardDirection[]).find(direction => lookupMap[direction]?.key === key)

                switch (direction) {
                    case 'UP':
                    case 'DOWN':
                    case 'LEFT':
                    case 'RIGHT':
                    case 'UP_LEFT':
                    case 'UP_RIGHT':
                    case 'DOWN_LEFT': {
                        break
                    }
                    default: {
                        return
                    }
                }

                const activeManagerBoard = Array
                    .from(elementManageBoardRegistry.entries())
                    .filter(([, getActive]) => getActive())
                    .map(([element]) => element)[0] ?? rootContainer

                if (!activeManagerBoard) {
                    return
                }

                const elementInfoWithPositionList = Array
                    .from(activeActionRegistry.entries())
                    .filter(([element]) => activeManagerBoard.contains(element))
                    .map(([element, getActiveAction]) => {
                        const [active, setActive] = getActiveAction()
                        const [x, y] = calculatePositionPoint(element.getBoundingClientRect(), 'center')

                        return {
                            element,
                            active,
                            setActive,
                            x, y,
                        }
                    })

                const fromElementInfoWithPosition = elementInfoWithPositionList.find(element => element.active)

                if (!fromElementInfoWithPosition) {
                    return
                }

                const toElementInfoWithPositionList = elementInfoWithPositionList.filter(element => !element.active)

                const targetElement = groupByDirection(
                    objectMap(lookupMap, details => details?.strategy),
                    fromElementInfoWithPosition,
                    toElementInfoWithPositionList,
                )

                const fromElement = fromElementInfoWithPosition.element
                const toElement = targetElement(direction)[0]?.element

                if (!toElement) {
                    return
                }

                const eventInfo = { fromElement, toElement }

                const allowChange = eventCallback?.(e, eventInfo)

                if (allowChange !== false) {
                    fromElementInfoWithPosition.setActive(false)
                    targetElement(direction)[0]?.setActive(true)
                    setEventInfo(eventInfo)
                }
            }

            window.addEventListener('keydown', handleKeyBoardEvent)

            return () => {
                window.removeEventListener('keydown', handleKeyBoardEvent)
            }
        },
        [activeActionRegistry, directionMap, elementManageBoardRegistry, eventCallback, getDirectionMap, rootContainer],
    )

    return { markRef }
}

export const useElementRegister = (markRef: RegistrySymbol, activeAction: () => ActiveAction) => {
    const { registerElement } = useMemo(() => elementRegistryWeakMap.get(markRef), [markRef]) ?? {}

    const elementRef = useRef<HTMLElement | undefined>()

    useEffect(
        () => elementRef.current ? registerElement?.(elementRef.current, activeAction) : undefined,
        [activeAction, elementRef, registerElement],
    )

    return elementRef
}

export const useBoardRegister = (markRef: RegistrySymbol, getActive: () => boolean) => {
    const { registerBoard } = useMemo(() => elementRegistryWeakMap.get(markRef), [markRef]) ?? {}

    const elementRef = useRef<HTMLElement | undefined>()

    useEffect(
        () => elementRef.current ? registerBoard?.(elementRef.current, getActive) : undefined,
        [elementRef, getActive, registerBoard],
    )

    return elementRef
}
