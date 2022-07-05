/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StrategiesHelper } from '../StrategiesHelper'

describe('test StrategiesHelper data structure', () => {
    test('its data structure', () => {
        expect(StrategiesHelper).toEqual({
            distance: expect.any(Function),
            secant: expect.any(Function),
            cosine: expect.any(Function),
            sine: expect.any(Function),
            tangent: expect.any(Function),
        })
    })
})