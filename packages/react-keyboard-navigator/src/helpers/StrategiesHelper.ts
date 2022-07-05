import { DirectionDetails, DirectionKeyMap, DirectionMap, KeyboardDirection, DistanceStrategy } from '../types/type'
import { isObject, objectMap } from '../utils/helper'

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

const preferredStrategy = 'Secant'

function normalizeOption (directionMap: DirectionKeyMap | DirectionMap, strategy: (direction: KeyboardDirection, originStrategy?: DistanceStrategy) => DistanceStrategy | undefined): DirectionMap {
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
    distance: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin = false): DirectionMap => {
        return normalizeOption(directionMap, (_, originStrategy) => keepOrigin ? originStrategy ?? 'Distance' : 'Distance') 
    },
    secant: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin = false): DirectionMap => {
        return normalizeOption(directionMap, (_, originStrategy) => keepOrigin ? originStrategy ?? 'Secant' : 'Secant') 
    },
    cosine: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin = false): DirectionMap => {
        return normalizeOption(directionMap, (_, originStrategy) => keepOrigin ? originStrategy ?? 'Cosine' :  'Cosine') 
    },
    sine: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin = false): DirectionMap => {
        return normalizeOption(directionMap, (_, originStrategy) => keepOrigin ? originStrategy ?? 'Sine' : 'Sine') 
    },
    tangent: (directionMap: DirectionKeyMap | DirectionMap, keepOrigin = false): DirectionMap => {
        return normalizeOption(directionMap, (_, originStrategy) => keepOrigin ? originStrategy ?? 'Tangent' : 'Tangent') 
    },
}
