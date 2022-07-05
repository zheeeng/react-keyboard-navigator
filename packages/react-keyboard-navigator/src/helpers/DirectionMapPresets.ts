import { StrategiesHelper } from './StrategiesHelper'
import { objectMap } from '../utils/helper'
import { DirectionKeyMap } from '../types/type'

const ArrowDirectionKeyMap: DirectionKeyMap = {
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
}

const WASDDirectionKeyMap: DirectionKeyMap = {
    UP: 'W',
    DOWN: 'S',
    LEFT: 'A',
    RIGHT: 'D',
}

const IJKLDirectionKeyMap: DirectionKeyMap = {
    UP: 'I',
    DOWN: 'k',
    LEFT: 'J',
    RIGHT: 'L',
}

const HJKLDirectionKeyMap: DirectionKeyMap = {
    UP: 'K',
    DOWN: 'J',
    LEFT: 'H',
    RIGHT: 'L',
}

const NumPadDirectionKeyMap: DirectionKeyMap = {
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
    ArrowDirectionMap: objectMap(StrategiesHelper, helper => helper(ArrowDirectionKeyMap)),
    WASDDirectionMap: objectMap(StrategiesHelper, helper => helper(WASDDirectionKeyMap)),
    IJKLDirectionMap: objectMap(StrategiesHelper, helper => helper(IJKLDirectionKeyMap)),
    HJKLDirectionMap: objectMap(StrategiesHelper, helper => helper(HJKLDirectionKeyMap)),
    NumPadDirectionMap: objectMap(StrategiesHelper, helper => helper(NumPadDirectionKeyMap)),
}
