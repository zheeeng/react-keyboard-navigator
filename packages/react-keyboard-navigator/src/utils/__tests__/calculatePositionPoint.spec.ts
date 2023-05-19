import { describe, test, expect, beforeAll, afterAll, vi, type SpyInstance } from 'vitest'

/**
 * @vitest-environment jsdom
 */

import { calculatePositionPoint } from '../calculatePositionPoint'

describe('calculatePositionPoint gets a tuple of center points [x, y]', () => {
    let element: HTMLDivElement
    let spy: SpyInstance<[], DOMRect>

    beforeAll(() => {
        element = document.createElement('div')

        spy = vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({
            bottom: 60,
            height: 60,
            left: 60,
            right: 60,
            top: 60,
            width: 60,
            x: 60,
            y: 60,
            toJSON() {
                /** pass **/
            }
        })
    })

    afterAll(() => {
        spy.mockClear()
    })

    test('getting specific position point', () => {
        expect(
            calculatePositionPoint(element.getBoundingClientRect(), 'center')
        ).toEqual([90, 90])
        expect(
            calculatePositionPoint(element.getBoundingClientRect(), 'left-edge')
        ).toEqual([60, 90])
        expect(
            calculatePositionPoint(element.getBoundingClientRect(), 'right-edge')
        ).toEqual([120, 90])
        expect(
            calculatePositionPoint(element.getBoundingClientRect(), 'top-edge')
        ).toEqual([90, 60])
        expect(
            calculatePositionPoint(element.getBoundingClientRect(), 'bottom-edge')
        ).toEqual([90, 120])
        expect(
            calculatePositionPoint(element.getBoundingClientRect(), 'top-left-corner')
        ).toEqual([60, 60])
        expect(
            calculatePositionPoint(element.getBoundingClientRect(), 'top-right-corner')
        ).toEqual([120, 60])
        expect(
            calculatePositionPoint(element.getBoundingClientRect(), 'bottom-left-corner')
        ).toEqual([60, 120])
        expect(
            calculatePositionPoint(element.getBoundingClientRect(), 'bottom-right-corner')
        ).toEqual([120, 120])
    })
})
