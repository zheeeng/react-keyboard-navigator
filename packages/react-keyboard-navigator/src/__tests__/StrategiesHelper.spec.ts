/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StrategiesHelper } from '../useKeyboardNavigator'

describe('test StrategiesHelper data structure', () => {
    test('its data structure', () => {
        expect(StrategiesHelper).toEqual({
            distance: expect.any(Function),
            cosine: expect.any(Function),
            horizontalProjectFirst: expect.any(Function),
            horizontalDistanceFirst: expect.any(Function),
            verticalProjectFirst: expect.any(Function),
            verticalDistanceFirst: expect.any(Function),
        })
    })
})