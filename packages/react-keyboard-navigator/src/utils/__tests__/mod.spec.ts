import { describe, test, expect } from 'vitest'
import { mod } from '../mod'

describe('mod compacts in a numbers loop with specify lowerBound(inclusively) and upperBound(inclusively)', () => {
    test('numbers are one of the lowerBound or upperBound', () => {
        expect(mod(0, 0, 6)).toBe(0)
        expect(mod(1, 0, 6)).toBe(1)
        expect(mod(2, 0, 6)).toBe(2)
        expect(mod(3, 0, 6)).toBe(3)
        expect(mod(4, 0, 6)).toBe(4)
        expect(mod(5, 0, 6)).toBe(5)
        expect(mod(6, 0, 6)).toBe(6)
    })

    test('numbers in between lowerBound and upperBound', () => {
        expect(mod(6, 2, 8)).toBe(6)
        expect(mod(6, 5, 7)).toBe(6)
    })

    test('numbers are smaller than the  lowerBound and upperBound', () => {
        expect(mod(1, 2, 8)).toBe(8)
        expect(mod(4, 5, 7)).toBe(7)
        expect(mod(3, 5, 7)).toBe(6)
        expect(mod(2, 5, 7)).toBe(5)
        expect(mod(1, 5, 7)).toBe(7)
    })

    test('numbers are larger than the  lowerBound and upperBound', () => {
        expect(mod(9, 2, 8)).toBe(2)
        expect(mod(8, 5, 7)).toBe(5)
        expect(mod(9, 5, 7)).toBe(6)
        expect(mod(10, 5, 7)).toBe(7)
        expect(mod(11, 5, 7)).toBe(5)

    })

    test('mod is ok with misplace the lowerBound and upperBound', () => {
        expect(mod(6, 8, 2)).toBe(6)
        expect(mod(6, 5, 7)).toBe(6)
        expect(mod(1, 8, 2)).toBe(8)
        expect(mod(4, 7, 5)).toBe(7)
        expect(mod(3, 7, 5)).toBe(6)
        expect(mod(2, 7, 5)).toBe(5)
        expect(mod(1, 7, 5)).toBe(7)
        expect(mod(9, 8, 2)).toBe(2)
        expect(mod(8, 7, 5)).toBe(5)
        expect(mod(9, 7, 5)).toBe(6)
        expect(mod(10, 7, 5)).toBe(7)
        expect(mod(11, 7, 5)).toBe(5)
    })

    test('mod handlers negative input correctly', () => {
        expect(mod(-1, 5, 7)).toBe(5)
        expect(mod(-2, 5, 7)).toBe(7)
        expect(mod(-3, 5, 7)).toBe(6)
        expect(mod(-4, 5, 7)).toBe(5)
        expect(mod(-5, 5, 7)).toBe(7)
    })

    test('mod handlers negative range correctly', () => {
        expect(mod(1, -5, -7)).toBe(-5)
        expect(mod(2, -5, -7)).toBe(-7)
        expect(mod(3, -5, -7)).toBe(-6)
        expect(mod(4, -5, -7)).toBe(-5)
        expect(mod(5, -5, -7)).toBe(-7)
    })

    test('mod handlers negative input and negative range correctly', () => {
        expect(mod(-1, -5, -7)).toBe(-7)
        expect(mod(-2, -5, -7)).toBe(-5)
        expect(mod(-3, -5, -7)).toBe(-6)
        expect(mod(-4, -5, -7)).toBe(-7)
        expect(mod(-5, -5, -7)).toBe(-5)
    })
})