import { useEffect, useMemo, useState } from 'react'
import { createOpaqueTypeConstructor } from './OpaqueType'
import { useValueGetter } from './useValueGetter'
import { calculatePositionPoint } from './utils/calculatePositionPoint'
import { groupByDirection } from './utils/groupByDirection'
import type { DistanceStrategy } from './utils/groupByDirection'
import { isObject, objectMap } from './utils/helper'

type KeyboardDirection = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' | 'UP_LEFT' | 'UP_RIGHT' | 'DOWN_LEFT' | 'DOWN_RIGHT'

type DirectionDetails = { key: string, strategy: DistanceStrategy }
type DirectionKeyMap = Partial<Record<KeyboardDirection, string>>
type DirectionDetailsMap = Partial<Record<KeyboardDirection, DirectionDetails | undefined>>

function isDirectionDetails (testItem: unknown): testItem is DirectionDetails {
    if (!isObject(testItem)) {
        return false
    }

    if (!('key' in testItem) || typeof testItem?.key != 'string') {
        return false
    }

    if (!('strategy' in testItem) || typeof testItem.strategy !== 'string' && typeof testItem.strategy !== 'function') {
        return false
    }

    return true
}

const preferredStrategy = 'PROJECT'

function normalizeOption (directionMap: DirectionKeyMap | DirectionDetailsMap, strategy: (direction: KeyboardDirection, originStrategy?: DistanceStrategy) => DistanceStrategy | undefined): DirectionDetailsMap {
    return objectMap(directionMap, (keyOrDirectionDetails, direction) => {
        if (typeof keyOrDirectionDetails === 'string') {
            return {
                key: keyOrDirectionDetails,
                strategy: strategy(direction) ?? preferredStrategy,
            }
        } else if (isDirectionDetails(keyOrDirectionDetails)) {
            return {
                key: keyOrDirectionDetails.key,
                strategy: strategy(direction, keyOrDirectionDetails.strategy) ?? keyOrDirectionDetails.strategy,
            }
        } else {
            return undefined
        }
    })
}

export const StrategiesHelper = {
    distance: (directionMap: DirectionKeyMap | DirectionDetailsMap, keepOrigin = false): DirectionDetailsMap => {
        return normalizeOption(directionMap, (_, originStrategy) => keepOrigin ? originStrategy ?? 'DISTANCE' : 'DISTANCE') 
    },
    project: (directionMap: DirectionKeyMap | DirectionDetailsMap, keepOrigin = false): DirectionDetailsMap => {
        return normalizeOption(directionMap, (_, originStrategy) => keepOrigin ? originStrategy ?? 'PROJECT' :  'PROJECT') 
    },
    horizontalProjectFirst: (directionMap: DirectionKeyMap | DirectionDetailsMap, keepOrigin = false): DirectionDetailsMap => {
        return normalizeOption(directionMap, (direction, originStrategy) => {
            if (keepOrigin && originStrategy) {
                return originStrategy
            }

            switch (direction) {
                case 'LEFT':
                case 'RIGHT':
                case 'UP_RIGHT':
                case 'UP_LEFT':
                case 'DOWN_LEFT':
                case 'DOWN_RIGHT': {
                    return 'PROJECT'
                }
            }

            return 'DISTANCE'
        })
    },
    horizontalDistanceFirst: (directionMap: DirectionKeyMap | DirectionDetailsMap, keepOrigin = false): DirectionDetailsMap => {
        return normalizeOption(directionMap, (direction, originStrategy) => {
            if (keepOrigin && originStrategy) {
                return originStrategy
            }

            switch (direction) {
                case 'LEFT':
                case 'RIGHT':
                case 'UP_RIGHT':
                case 'UP_LEFT':
                case 'DOWN_LEFT':
                case 'DOWN_RIGHT': {
                    return 'DISTANCE'
                }
            }

            return 'PROJECT'
        })
    },
    verticalProjectFirst: (directionMap: DirectionKeyMap | DirectionDetailsMap, keepOrigin = false): DirectionDetailsMap => {
        return normalizeOption(directionMap, (direction, originStrategy) => {
            if (keepOrigin && originStrategy) {
                return originStrategy
            }

            switch (direction) {
                case 'UP':
                case 'DOWN':
                case 'UP_RIGHT':
                case 'UP_LEFT':
                case 'DOWN_LEFT':
                case 'DOWN_RIGHT': {
                    return 'PROJECT'
                }
            }

            return 'DISTANCE'
        })
    },
    verticalDistanceFirst: (directionMap: DirectionKeyMap | DirectionDetailsMap, keepOrigin = false): DirectionDetailsMap => {
        return normalizeOption(directionMap, (direction, originStrategy) => {
            if (keepOrigin && originStrategy) {
                return originStrategy
            }

            switch (direction) {
                case 'UP':
                case 'DOWN':
                case 'UP_RIGHT':
                case 'UP_LEFT':
                case 'DOWN_LEFT':
                case 'DOWN_RIGHT': {
                    return 'DISTANCE'
                }
            }

            return 'PROJECT'
        })
    },
}

const ArrowDirectionMap: DirectionKeyMap = {
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
}

const WasdDirectionMap: DirectionKeyMap = {
    UP: 'W',
    DOWN: 'S',
    LEFT: 'A',
    RIGHT: 'D',
}

const IJKLDirectionMap: DirectionKeyMap = {
    UP: 'I',
    DOWN: 'k',
    LEFT: 'J',
    RIGHT: 'L',
}

const HJKLDirectionMap: DirectionKeyMap = {
    UP: 'K',
    DOWN: 'J',
    LEFT: 'H',
    RIGHT: 'L',
}

const NumPadDirectionMap: DirectionKeyMap = {
    UP_LEFT: '7',
    UP: '8',
    UP_RIGHT: '9',
    LEFT: '4',
    RIGHT: '6',
    DOWN_LEFT: '1',
    DOWN: '2',
    DOWN_RIGHT: '3',
}

export const DirectionMapPresets = {
    ArrowDirectionMap: objectMap(StrategiesHelper, helper => helper(ArrowDirectionMap)),
    WasdDirectionMap: objectMap(StrategiesHelper, helper => helper(WasdDirectionMap)),
    IJKLDirectionMap: objectMap(StrategiesHelper, helper => helper(IJKLDirectionMap)),
    HJKLDirectionMap: objectMap(StrategiesHelper, helper => helper(HJKLDirectionMap)),
    NumPadDirectionMap: objectMap(StrategiesHelper, helper => helper(NumPadDirectionMap)),
}

export type ActiveAction = [active: boolean, handleActiveChange: ((active: boolean) => void)]

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
    directionMap?: DirectionKeyMap | DirectionDetailsMap
    eventCallback?: (e: KeyboardEvent, eventInfo: { fromElement: HTMLElement, toElement?: HTMLElement }) => void | false
    rootContainer?: HTMLElement
}

export const useKeyboardNavigator = ({
    directionMap = DirectionMapPresets['ArrowDirectionMap'].verticalProjectFirst,
    eventCallback,
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

    useEffect(
        () => {
            function handleKeyBoardEvent (e: KeyboardEvent) {
                const key = e.key

                const lookupMap = StrategiesHelper.verticalProjectFirst(getDirectionMap(), true)

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

                const eventInfo = {
                    fromElement: fromElementInfoWithPosition.element,
                    toElement: targetElement(direction)[0]?.element,
                }

                const allowChange = eventCallback?.(e, eventInfo)

                if (allowChange !== false) {
                    fromElementInfoWithPosition.setActive(false)
                    targetElement(direction)[0]?.setActive(true)
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

    const [elementRef, setElementRef] = useState<HTMLElement | undefined>()

    useEffect(
        () => elementRef ? registerElement?.(elementRef, activeAction) : undefined,
        [activeAction, elementRef, registerElement],
    )

    return [elementRef, setElementRef] as [HTMLElement | undefined, (element: HTMLElement) => void]
}

export const useBoardRegister = (markRef: RegistrySymbol, getActive: () => boolean) => {
    const { registerBoard } = useMemo(() => elementRegistryWeakMap.get(markRef), [markRef]) ?? {}

    const [elementRef, setElementRef] = useState<HTMLElement | undefined>()

    useEffect(
        () => elementRef ? registerBoard?.(elementRef, getActive) : undefined,
        [elementRef, getActive, registerBoard],
    )

    return [elementRef, setElementRef] as [HTMLElement | undefined, (element: HTMLElement) => void]
}
