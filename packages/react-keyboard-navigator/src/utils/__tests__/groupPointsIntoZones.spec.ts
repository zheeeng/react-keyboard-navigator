import { describe, test, expect } from 'vitest'
import { groupPointsIntoZones } from '../groupPointsIntoZones'
import { testPoints, testPointsList } from './points.data'

describe('groupPointsIntoZones passes the basic cases', () => {

    function extractEachFirstElement <T extends [first: unknown, ...rest: unknown[]]>(items: T[]): T[0][] {
        return items.map(([first]) => first)
    }

    const expectedOutput = [
        [testPoints.zone1StartPoint], [testPoints.zone2StartPoint], [testPoints.zone3StartPoint], [testPoints.zone4StartPoint],
        [testPoints.zone5StartPoint], [testPoints.zone6StartPoint], [testPoints.zone7StartPoint], [testPoints.zone8StartPoint],
        [testPoints.zone9StartPoint], [testPoints.zone10StartPoint], [testPoints.zone11StartPoint], [testPoints.zone12StartPoint],
        [testPoints.zone13StartPoint], [testPoints.zone14StartPoint], [testPoints.zone15StartPoint], [testPoints.zone16StartPoint],
    ]

    test('divide points into 16 group correctly', () => {
        const getZone = groupPointsIntoZones(
            testPoints.centerPoint,
            testPointsList,
            16,
        )

        const testInput = [
            getZone(1), getZone(2), getZone(3), getZone(4),
            getZone(5), getZone(6), getZone(7), getZone(8),
            getZone(9), getZone(10), getZone(11), getZone(12),
            getZone(13), getZone(14), getZone(15), getZone(16),
        ]

        expect(testInput.map(extractEachFirstElement)).toEqual(expectedOutput)
    })

    test('outputting points exclude itself', () => {
        const getZone = groupPointsIntoZones(
            testPoints.centerPoint,
            [testPoints.centerPoint, ...testPointsList],
            16,
        )

        const testInput = [
            getZone(1), getZone(2), getZone(3), getZone(4),
            getZone(5), getZone(6), getZone(7), getZone(8),
            getZone(9), getZone(10), getZone(11), getZone(12),
            getZone(13), getZone(14), getZone(15), getZone(16),
        ]

        expect(testInput.map(extractEachFirstElement)).toEqual(expectedOutput)

    })
})
