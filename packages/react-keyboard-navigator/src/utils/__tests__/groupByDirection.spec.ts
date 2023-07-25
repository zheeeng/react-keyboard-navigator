import { describe, test, expect } from 'vitest'
import { groupByDirection } from '../groupByDirection'
import { testPoints, testPointsList } from './points.data'

const {
    zone1StartPoint,zone16StartPoint, zone2StartPoint, zone3StartPoint,
    zone5StartPoint, zone4StartPoint, zone6StartPoint, zone7StartPoint,
    zone9StartPoint, zone8StartPoint, zone10StartPoint, zone11StartPoint,
    zone13StartPoint, zone12StartPoint, zone14StartPoint, zone15StartPoint,
} = testPoints

describe('test groupByDirection cases not care about the calculation mode', () => {
    test('throw error when try get an invalid direction', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Distance', UP_RIGHT: 'Distance', RIGHT: 'Distance', DOWN_RIGHT: 'Distance',
                DOWN: 'Cosine', DOWN_LEFT: 'Cosine', LEFT: 'Cosine', UP_LEFT: 'Cosine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        // @ts-expect-error: for test
        expect(() => groupBy('up')).toThrowError('directionGroupName is not valid: up')
        // @ts-expect-error: for test
        expect(() => groupBy('Up')).toThrowError('directionGroupName is not valid: Up')
        // @ts-expect-error: for test
        expect(() => groupBy('TOP')).toThrowError('directionGroupName is not valid: TOP')
        // @ts-expect-error: for test
        expect(() => groupBy('NORTH')).toThrowError('directionGroupName is not valid: NORTH')
    })
})

function createTestInput (groupBy: ReturnType<typeof groupByDirection>) {
    return {
        UP: groupBy('UP'),
        UP_RIGHT: groupBy('UP_RIGHT'),
        RIGHT: groupBy('RIGHT'),
        DOWN_RIGHT: groupBy('DOWN_RIGHT'),
        DOWN: groupBy('DOWN'),
        DOWN_LEFT: groupBy('DOWN_LEFT'),
        LEFT: groupBy('LEFT'),
        UP_LEFT: groupBy('UP_LEFT'),
    }
}

describe('test groupByDirection in `Distance` calculation mode', () => {

    test('points are groupBy by 8 directions and sorted in ascending distance', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Distance', UP_RIGHT: 'Distance', RIGHT: 'Distance', DOWN_RIGHT: 'Distance',
                DOWN: 'Distance', DOWN_LEFT: 'Distance', LEFT: 'Distance', UP_LEFT: 'Distance',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone1StartPoint],
            UP_RIGHT: [zone3StartPoint, zone2StartPoint],
            RIGHT: [zone5StartPoint, zone4StartPoint],
            DOWN_RIGHT: [zone7StartPoint, zone6StartPoint],
            DOWN: [zone9StartPoint, zone8StartPoint],
            DOWN_LEFT: [zone11StartPoint, zone10StartPoint],
            LEFT: [zone13StartPoint, zone12StartPoint],
            UP_LEFT: [zone15StartPoint, zone14StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending distance', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Distance', RIGHT: 'Distance',
                DOWN: 'Distance', LEFT: 'Distance',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone15StartPoint, zone2StartPoint, zone1StartPoint],
            UP_RIGHT: [],
            RIGHT: [zone6StartPoint, zone5StartPoint, zone4StartPoint, zone3StartPoint],
            DOWN_RIGHT: [],
            DOWN: [zone10StartPoint, zone9StartPoint, zone8StartPoint, zone7StartPoint],
            DOWN_LEFT: [],
            LEFT: [zone14StartPoint, zone13StartPoint, zone12StartPoint, zone11StartPoint],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending distance (2)', () => {
        const groupBy = groupByDirection(
            {
                UP_RIGHT: 'Distance', DOWN_RIGHT: 'Distance',
                DOWN_LEFT: 'Distance', UP_LEFT: 'Distance',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [],
            UP_RIGHT: [zone4StartPoint, zone3StartPoint, zone2StartPoint, zone1StartPoint],
            RIGHT: [],
            DOWN_RIGHT: [zone8StartPoint, zone7StartPoint, zone6StartPoint, zone5StartPoint],
            DOWN: [],
            DOWN_LEFT: [zone12StartPoint, zone11StartPoint, zone10StartPoint, zone9StartPoint],
            LEFT: [],
            UP_LEFT: [zone16StartPoint, zone15StartPoint, zone14StartPoint, zone13StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending distance (3)', () => {
        const groupBy = groupByDirection(
            {
                DOWN: 'Distance', DOWN_LEFT: 'Distance', LEFT: 'Distance', UP_LEFT: 'Distance',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone8StartPoint, zone7StartPoint, zone6StartPoint, zone5StartPoint],
            DOWN_LEFT: [zone11StartPoint, zone10StartPoint],
            LEFT: [zone13StartPoint, zone12StartPoint],
            UP_LEFT: [zone16StartPoint, zone15StartPoint, zone14StartPoint, zone2StartPoint, zone1StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending distance (4)', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Distance', UP_RIGHT: 'Distance',
                DOWN: 'Distance', DOWN_LEFT: 'Distance',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone15StartPoint, zone14StartPoint, zone1StartPoint],
            UP_RIGHT: [zone5StartPoint, zone4StartPoint, zone3StartPoint, zone2StartPoint],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone8StartPoint, zone7StartPoint, zone6StartPoint],
            DOWN_LEFT: [zone13StartPoint, zone12StartPoint, zone11StartPoint, zone10StartPoint],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 2 directions and sorted in ascending distance', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Distance', DOWN: 'Distance',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone15StartPoint, zone14StartPoint, zone13StartPoint, zone4StartPoint, zone3StartPoint, zone2StartPoint, zone1StartPoint],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone12StartPoint, zone11StartPoint, zone10StartPoint, zone9StartPoint, zone8StartPoint, zone7StartPoint, zone6StartPoint, zone5StartPoint],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 2 directions and sorted in ascending distance', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Distance', RIGHT: 'Distance',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone15StartPoint, zone14StartPoint, zone13StartPoint, zone2StartPoint, zone1StartPoint],
            UP_RIGHT: [],
            RIGHT: [zone8StartPoint, zone7StartPoint, zone6StartPoint, zone5StartPoint, zone4StartPoint, zone3StartPoint],
            DOWN_RIGHT: [],
            DOWN: [],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 1 direction and sorted in ascending distance', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Distance',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone15StartPoint, zone14StartPoint, zone13StartPoint, zone4StartPoint, zone3StartPoint, zone2StartPoint, zone1StartPoint],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })
})

describe('test groupByDirection in `Secant` calculation mode', () => {

    test('points are groupBy by 8 directions and sorted in ascending distance', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Secant', UP_RIGHT: 'Secant', RIGHT: 'Secant', DOWN_RIGHT: 'Secant',
                DOWN: 'Secant', DOWN_LEFT: 'Secant', LEFT: 'Secant', UP_LEFT: 'Secant',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone1StartPoint],
            UP_RIGHT: [zone3StartPoint, zone2StartPoint],
            RIGHT: [zone5StartPoint, zone4StartPoint],
            DOWN_RIGHT: [zone7StartPoint, zone6StartPoint],
            DOWN: [zone9StartPoint, zone8StartPoint],
            DOWN_LEFT: [zone11StartPoint, zone10StartPoint],
            LEFT: [zone13StartPoint, zone12StartPoint],
            UP_LEFT: [zone15StartPoint, zone14StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Secant', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Secant', RIGHT: 'Secant',
                DOWN: 'Secant', LEFT: 'Secant',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone1StartPoint, zone2StartPoint, zone15StartPoint],
            UP_RIGHT: [],
            RIGHT: [zone5StartPoint, zone6StartPoint, zone4StartPoint, zone3StartPoint],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone10StartPoint, zone8StartPoint, zone7StartPoint],
            DOWN_LEFT: [],
            LEFT: [zone13StartPoint, zone14StartPoint, zone12StartPoint, zone11StartPoint],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Secant (2)', () => {
        const groupBy = groupByDirection(
            {
                UP_RIGHT: 'Secant', DOWN_RIGHT: 'Secant',
                DOWN_LEFT: 'Secant', UP_LEFT: 'Secant',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [],
            UP_RIGHT: [zone3StartPoint, zone4StartPoint, zone2StartPoint, zone1StartPoint],
            RIGHT: [],
            DOWN_RIGHT: [zone7StartPoint, zone8StartPoint, zone6StartPoint, zone5StartPoint],
            DOWN: [],
            DOWN_LEFT: [zone11StartPoint, zone12StartPoint, zone10StartPoint, zone9StartPoint],
            LEFT: [],
            UP_LEFT: [zone15StartPoint, zone16StartPoint, zone14StartPoint, zone13StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Secant (3)', () => {
        const groupBy = groupByDirection(
            {
                DOWN: 'Secant', DOWN_LEFT: 'Secant', LEFT: 'Secant', UP_LEFT: 'Secant',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone8StartPoint, zone7StartPoint, zone6StartPoint, zone5StartPoint],
            DOWN_LEFT: [zone11StartPoint, zone10StartPoint],
            LEFT: [zone13StartPoint, zone12StartPoint],
            UP_LEFT: [zone15StartPoint, zone16StartPoint, zone14StartPoint, zone1StartPoint, zone2StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Secant (4)', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Secant', UP_RIGHT: 'Secant',
                DOWN: 'Secant', DOWN_LEFT: 'Secant',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone1StartPoint, zone15StartPoint, zone14StartPoint],
            UP_RIGHT: [zone3StartPoint, zone4StartPoint, zone2StartPoint, zone5StartPoint],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone8StartPoint, zone7StartPoint, zone6StartPoint],
            DOWN_LEFT: [zone11StartPoint, zone12StartPoint, zone10StartPoint, zone13StartPoint],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 2 directions and sorted in ascending Secant', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Secant', DOWN: 'Secant',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone1StartPoint, zone2StartPoint, zone15StartPoint, zone3StartPoint, zone14StartPoint, zone4StartPoint, zone13StartPoint],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone10StartPoint, zone8StartPoint, zone11StartPoint, zone7StartPoint, zone6StartPoint, zone12StartPoint, zone5StartPoint],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 2 directions and sorted in ascending Secant', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Secant', RIGHT: 'Secant',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone1StartPoint, zone2StartPoint, zone15StartPoint, zone14StartPoint, zone13StartPoint],
            UP_RIGHT: [],
            RIGHT: [zone5StartPoint, zone6StartPoint, zone4StartPoint, zone7StartPoint, zone3StartPoint, zone8StartPoint],
            DOWN_RIGHT: [],
            DOWN: [],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 1 direction and sorted in ascending Secant', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Secant',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone1StartPoint, zone2StartPoint, zone15StartPoint, zone3StartPoint, zone14StartPoint, zone4StartPoint, zone13StartPoint],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })
})

describe('test groupByDirection in `Cosine` calculation mode', () => {

    test('points are groupBy by 8 directions and sorted in ascending distance', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Cosine', UP_RIGHT: 'Cosine', RIGHT: 'Cosine', DOWN_RIGHT: 'Cosine',
                DOWN: 'Cosine', DOWN_LEFT: 'Cosine', LEFT: 'Cosine', UP_LEFT: 'Cosine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone16StartPoint, zone1StartPoint],
            UP_RIGHT: [zone2StartPoint, zone3StartPoint],
            RIGHT: [zone4StartPoint, zone5StartPoint],
            DOWN_RIGHT: [zone6StartPoint, zone7StartPoint],
            DOWN: [zone8StartPoint, zone9StartPoint],
            DOWN_LEFT: [zone10StartPoint, zone11StartPoint],
            LEFT: [zone12StartPoint, zone13StartPoint],
            UP_LEFT: [zone14StartPoint, zone15StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Cosine', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Cosine', RIGHT: 'Cosine',
                DOWN: 'Cosine', LEFT: 'Cosine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone15StartPoint, zone16StartPoint, zone2StartPoint, zone1StartPoint],
            UP_RIGHT: [],
            RIGHT: [zone3StartPoint, zone6StartPoint, zone4StartPoint, zone5StartPoint],
            DOWN_RIGHT: [],
            DOWN: [zone7StartPoint, zone10StartPoint, zone8StartPoint, zone9StartPoint],
            DOWN_LEFT: [],
            LEFT: [zone11StartPoint, zone14StartPoint, zone12StartPoint, zone13StartPoint],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Cosine (2)', () => {
        const groupBy = groupByDirection(
            {
                UP_RIGHT: 'Cosine', DOWN_RIGHT: 'Cosine',
                DOWN_LEFT: 'Cosine', UP_LEFT: 'Cosine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [],
            UP_RIGHT: [zone1StartPoint, zone4StartPoint, zone2StartPoint, zone3StartPoint],
            RIGHT: [],
            DOWN_RIGHT: [zone5StartPoint, zone8StartPoint, zone6StartPoint, zone7StartPoint],
            DOWN: [],
            DOWN_LEFT: [zone9StartPoint, zone12StartPoint, zone10StartPoint, zone11StartPoint],
            LEFT: [],
            UP_LEFT: [zone13StartPoint, zone16StartPoint, zone14StartPoint, zone15StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Cosine (3)', () => {
        const groupBy = groupByDirection(
            {
                DOWN: 'Cosine', DOWN_LEFT: 'Cosine', LEFT: 'Cosine', UP_LEFT: 'Cosine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone5StartPoint, zone6StartPoint, zone7StartPoint, zone8StartPoint, zone9StartPoint],
            DOWN_LEFT: [zone10StartPoint, zone11StartPoint],
            LEFT: [zone12StartPoint, zone13StartPoint],
            UP_LEFT: [zone2StartPoint, zone1StartPoint, zone16StartPoint, zone14StartPoint, zone15StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Cosine (4)', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Cosine', UP_RIGHT: 'Cosine',
                DOWN: 'Cosine', DOWN_LEFT: 'Cosine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone14StartPoint, zone15StartPoint, zone16StartPoint, zone1StartPoint],
            UP_RIGHT: [zone5StartPoint, zone4StartPoint, zone2StartPoint, zone3StartPoint],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone6StartPoint, zone7StartPoint, zone8StartPoint, zone9StartPoint],
            DOWN_LEFT: [zone13StartPoint, zone12StartPoint, zone10StartPoint, zone11StartPoint],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 2 directions and sorted in ascending Cosine', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Cosine', DOWN: 'Cosine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone13StartPoint, zone14StartPoint, zone4StartPoint, zone15StartPoint, zone3StartPoint, zone16StartPoint, zone2StartPoint, zone1StartPoint],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone5StartPoint, zone12StartPoint, zone6StartPoint, zone11StartPoint, zone7StartPoint, zone10StartPoint, zone8StartPoint, zone9StartPoint],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 2 directions and sorted in ascending Cosine', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Cosine', RIGHT: 'Cosine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone13StartPoint, zone14StartPoint, zone15StartPoint, zone16StartPoint, zone2StartPoint, zone1StartPoint],
            UP_RIGHT: [],
            RIGHT: [zone8StartPoint, zone7StartPoint, zone3StartPoint, zone6StartPoint, zone4StartPoint, zone5StartPoint],
            DOWN_RIGHT: [],
            DOWN: [],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 1 direction and sorted in ascending Cosine', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Cosine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone13StartPoint, zone14StartPoint, zone4StartPoint, zone15StartPoint, zone3StartPoint, zone16StartPoint, zone2StartPoint, zone1StartPoint],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })
})

describe('test groupByDirection in `Sine` calculation mode', () => {

    test('points are groupBy by 8 directions and sorted in ascending distance', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Sine', UP_RIGHT: 'Sine', RIGHT: 'Sine', DOWN_RIGHT: 'Sine',
                DOWN: 'Sine', DOWN_LEFT: 'Sine', LEFT: 'Sine', UP_LEFT: 'Sine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone1StartPoint, zone16StartPoint],
            UP_RIGHT: [zone3StartPoint, zone2StartPoint],
            RIGHT: [zone5StartPoint, zone4StartPoint],
            DOWN_RIGHT: [zone7StartPoint, zone6StartPoint],
            DOWN: [zone9StartPoint, zone8StartPoint],
            DOWN_LEFT: [zone11StartPoint, zone10StartPoint],
            LEFT: [zone13StartPoint, zone12StartPoint],
            UP_LEFT: [zone15StartPoint, zone14StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Sine', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Sine', RIGHT: 'Sine',
                DOWN: 'Sine', LEFT: 'Sine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone1StartPoint, zone16StartPoint, zone2StartPoint, zone15StartPoint],
            UP_RIGHT: [],
            RIGHT: [zone5StartPoint, zone4StartPoint, zone6StartPoint, zone3StartPoint],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone8StartPoint, zone10StartPoint, zone7StartPoint],
            DOWN_LEFT: [],
            LEFT: [zone13StartPoint, zone12StartPoint, zone14StartPoint, zone11StartPoint],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Sine (2)', () => {
        const groupBy = groupByDirection(
            {
                UP_RIGHT: 'Sine', DOWN_RIGHT: 'Sine',
                DOWN_LEFT: 'Sine', UP_LEFT: 'Sine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [],
            UP_RIGHT: [zone3StartPoint, zone2StartPoint, zone4StartPoint, zone1StartPoint],
            RIGHT: [],
            DOWN_RIGHT: [zone7StartPoint, zone6StartPoint, zone8StartPoint, zone5StartPoint],
            DOWN: [],
            DOWN_LEFT: [zone11StartPoint, zone10StartPoint, zone12StartPoint, zone9StartPoint],
            LEFT: [],
            UP_LEFT: [zone15StartPoint, zone14StartPoint, zone16StartPoint, zone13StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Sine (3)', () => {
        const groupBy = groupByDirection(
            {
                DOWN: 'Sine', DOWN_LEFT: 'Sine', LEFT: 'Sine', UP_LEFT: 'Sine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint,  zone8StartPoint, zone7StartPoint, zone6StartPoint, zone5StartPoint],
            DOWN_LEFT: [zone11StartPoint, zone10StartPoint],
            LEFT: [zone13StartPoint, zone12StartPoint],
            UP_LEFT: [zone15StartPoint, zone14StartPoint, zone16StartPoint, zone1StartPoint, zone2StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Sine (4)', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Sine', UP_RIGHT: 'Sine',
                DOWN: 'Sine', DOWN_LEFT: 'Sine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone1StartPoint, zone16StartPoint, zone15StartPoint, zone14StartPoint],
            UP_RIGHT: [zone3StartPoint, zone2StartPoint, zone4StartPoint, zone5StartPoint],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone8StartPoint, zone7StartPoint, zone6StartPoint],
            DOWN_LEFT: [zone11StartPoint, zone10StartPoint, zone12StartPoint, zone13StartPoint],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 2 directions and sorted in ascending Sine', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Sine', DOWN: 'Sine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone1StartPoint, zone16StartPoint, zone2StartPoint, zone15StartPoint, zone3StartPoint, zone14StartPoint, zone13StartPoint, zone4StartPoint],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone8StartPoint, zone10StartPoint, zone11StartPoint, zone7StartPoint, zone12StartPoint, zone6StartPoint, zone5StartPoint],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 2 directions and sorted in ascending Sine', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Sine', RIGHT: 'Sine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone1StartPoint, zone16StartPoint, zone2StartPoint, zone15StartPoint, zone14StartPoint, zone13StartPoint],
            UP_RIGHT: [],
            RIGHT: [zone5StartPoint, zone4StartPoint, zone6StartPoint, zone7StartPoint, zone3StartPoint, zone8StartPoint],
            DOWN_RIGHT: [],
            DOWN: [],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 1 direction and sorted in ascending Sine', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Sine',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone1StartPoint, zone16StartPoint, zone2StartPoint, zone15StartPoint, zone3StartPoint, zone14StartPoint, zone13StartPoint, zone4StartPoint],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })
})

describe('test groupByDirection in `Tangent` calculation mode', () => {

    test('points are groupBy by 8 directions and sorted in ascending distance', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Tangent', UP_RIGHT: 'Tangent', RIGHT: 'Tangent', DOWN_RIGHT: 'Tangent',
                DOWN: 'Tangent', DOWN_LEFT: 'Tangent', LEFT: 'Tangent', UP_LEFT: 'Tangent',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone1StartPoint, zone16StartPoint],
            UP_RIGHT: [zone3StartPoint, zone2StartPoint],
            RIGHT: [zone5StartPoint, zone4StartPoint],
            DOWN_RIGHT: [zone7StartPoint, zone6StartPoint],
            DOWN: [zone9StartPoint, zone8StartPoint],
            DOWN_LEFT: [zone11StartPoint, zone10StartPoint],
            LEFT: [zone13StartPoint, zone12StartPoint],
            UP_LEFT: [zone15StartPoint, zone14StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Tangent', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Tangent', RIGHT: 'Tangent',
                DOWN: 'Tangent', LEFT: 'Tangent',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone1StartPoint, zone16StartPoint, zone2StartPoint, zone15StartPoint],
            UP_RIGHT: [],
            RIGHT: [zone5StartPoint, zone4StartPoint, zone6StartPoint, zone3StartPoint],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone8StartPoint, zone10StartPoint, zone7StartPoint],
            DOWN_LEFT: [],
            LEFT: [zone13StartPoint, zone12StartPoint, zone14StartPoint, zone11StartPoint],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Tangent (2)', () => {
        const groupBy = groupByDirection(
            {
                UP_RIGHT: 'Tangent', DOWN_RIGHT: 'Tangent',
                DOWN_LEFT: 'Tangent', UP_LEFT: 'Tangent',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [],
            UP_RIGHT: [zone3StartPoint, zone2StartPoint, zone4StartPoint, zone1StartPoint],
            RIGHT: [],
            DOWN_RIGHT: [zone7StartPoint, zone6StartPoint, zone8StartPoint, zone5StartPoint],
            DOWN: [],
            DOWN_LEFT: [zone11StartPoint, zone10StartPoint, zone12StartPoint, zone9StartPoint],
            LEFT: [],
            UP_LEFT: [zone15StartPoint, zone14StartPoint, zone16StartPoint, zone13StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Tangent (3)', () => {
        const groupBy = groupByDirection(
            {
                DOWN: 'Tangent', DOWN_LEFT: 'Tangent', LEFT: 'Tangent', UP_LEFT: 'Tangent',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone8StartPoint, zone7StartPoint, zone6StartPoint, zone5StartPoint],
            DOWN_LEFT: [zone11StartPoint, zone10StartPoint],
            LEFT: [zone13StartPoint, zone12StartPoint],
            UP_LEFT: [zone15StartPoint, zone14StartPoint, zone16StartPoint, zone1StartPoint, zone2StartPoint],
        })
    })

    test('points are groupBy by 4 directions and sorted in ascending Tangent (4)', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Tangent', UP_RIGHT: 'Tangent',
                DOWN: 'Tangent', DOWN_LEFT: 'Tangent',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone1StartPoint, zone16StartPoint, zone15StartPoint, zone14StartPoint],
            UP_RIGHT: [zone3StartPoint, zone2StartPoint, zone4StartPoint, zone5StartPoint],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone8StartPoint, zone7StartPoint, zone6StartPoint],
            DOWN_LEFT: [zone11StartPoint, zone10StartPoint, zone12StartPoint, zone13StartPoint],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 2 directions and sorted in ascending Tangent', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Tangent', DOWN: 'Tangent',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone1StartPoint, zone16StartPoint, zone2StartPoint, zone15StartPoint, zone3StartPoint, zone14StartPoint, zone4StartPoint, zone13StartPoint],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [zone9StartPoint, zone8StartPoint, zone10StartPoint, zone7StartPoint, zone11StartPoint, zone6StartPoint, zone12StartPoint, zone5StartPoint],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 2 directions and sorted in ascending Tangent', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Tangent', RIGHT: 'Tangent',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone1StartPoint, zone16StartPoint, zone2StartPoint, zone15StartPoint, zone14StartPoint, zone13StartPoint],
            UP_RIGHT: [],
            RIGHT: [zone5StartPoint, zone4StartPoint, zone6StartPoint, zone3StartPoint, zone7StartPoint, zone8StartPoint],
            DOWN_RIGHT: [],
            DOWN: [],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })

    test('points are groupBy by 1 direction and sorted in ascending Tangent', () => {
        const groupBy = groupByDirection(
            {
                UP: 'Tangent',
            },
            testPoints.centerPoint,
            testPointsList,
        )

        expect(createTestInput(groupBy)).toEqual({
            UP: [zone1StartPoint, zone16StartPoint, zone2StartPoint, zone15StartPoint, zone3StartPoint, zone14StartPoint, zone4StartPoint, zone13StartPoint],
            UP_RIGHT: [],
            RIGHT: [],
            DOWN_RIGHT: [],
            DOWN: [],
            DOWN_LEFT: [],
            LEFT: [],
            UP_LEFT: [],
        })
    })
})
