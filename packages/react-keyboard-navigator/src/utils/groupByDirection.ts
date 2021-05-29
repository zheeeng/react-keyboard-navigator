import { mod } from './mod'
import { groupPointsIntoZones } from './groupPointsIntoZones'

type Point = { x: number, y: number }

type PointWithPosition<P extends Point> = [point: P, angleDegree: number, distance: number]

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' | 'UP_LEFT' | 'UP_RIGHT' | 'DOWN_LEFT' | 'DOWN_RIGHT'

export type DistanceStrategy = 'PROJECT' | 'DISTANCE' | ((distance: number, angleDegree: number) => number)

function calculateDistance (distance: number, angleDegree: number, strategy: DistanceStrategy) {
    if (strategy === 'PROJECT') {
        return Math.abs(distance / Math.cos(Math.PI * angleDegree / 180))
    } else if (strategy === 'DISTANCE') {
        return distance
    } else {
        return strategy(distance, angleDegree)
    }
}

function extractSortedPoints <P extends Point> (
    pickStrategy: DistanceStrategy,
    directionDegree: number,
    pointWithPositionList: PointWithPosition<P>[]
) {
    return pointWithPositionList
        .map(([point, degree, distance]) => ([point, calculateDistance(distance, degree - directionDegree, pickStrategy)] as [point: P, distance: number]))
        .sort(([, distanceA], [, distanceB]) =>  distanceA - distanceB)
        .map(([point]) => point)
}

const zoneAliases: Direction[] = [
    // 0, 1, 2, 3
    'UP', 'UP_RIGHT', 'RIGHT', 'DOWN_RIGHT',
    // 4, 5, 6, 7
    'DOWN', 'DOWN_LEFT', 'LEFT', 'UP_LEFT',
]

const MAX_ZONE_COUNT = 16
const HALF_MAX_ZONE_COUNT = MAX_ZONE_COUNT / 2
const QUARTER_MAX_ZONE_COUNT = MAX_ZONE_COUNT / 4

const zoneAliasIndices = Array.from({ length: HALF_MAX_ZONE_COUNT }).map((_, index) => index)

export type DirectionPickStrategies = Partial<Record<Direction, DistanceStrategy>>

/**
 * @description group points to 16 directions by its axis position
 *|----|-------------------------------------------------|---|
 *|    |   zone 15   | zone 16  |   zone 1  |  zone 2    |   |
 *|----|-------------------------------------------------|---|
 *| z  | #...........#..........#..........#...........# | z |
 *| o  | ..#..........#.........#.........#..........#.. | o |
 *| n  | ....#.........#........#........#.........#.... | n |
 *| e  | ......#........#.......#.......#........#...... | e |
 *| 14 | ........#.......#......#......#.......#........ | 3 |
 *|----| ..........#......#.....#.....#......#.......... |---|
 *| z  | #...........#.....#....#....#.....#...........# | z |
 *| o  | ....#.........#....#...#...#....#.........#.... | o |
 *| n  | ........#.......#...#..#..#...#.......#........ | n |
 *| e  | ............#.....#..#.#.#..#.....#............ | e |
 *| 13 | ................#...#..#..#...#................ | 4 |
 *|----| ############################################### |---|
 *| z  | ................#...#..#..#...#................ | z |
 *| o  | ............#.....#..#.#.#..#.....#............ | o |
 *| n  | ........#.......#...#..#..#...#.......#........ | n |
 *| e  | ....#.........#....#...#...#....#.........#.... | e |
 *| 12 | #...........#.....#....#....#.....#...........# | 5 |
 *|----| ..........#......#.....#.....#......#.......... |---|
 *| z  | ........#.......#......#......#.......#........ | z |
 *| o  | ......#........#.......#.......#........#...... | o |
 *| n  | ....#.........#........#........#.........#.... | n |
 *| e  | ..#..........#.........#.........#..........#.. | e |
 *| 11 | #...........#..........#..........#...........# | 6 |
 *|----|-------------------------------------------------|---|
 *|    |   zone 10   | zone 9   |   zone 8  |  zone 7    |   |
 *|----|-------------------------------------------------|---|
 */
export function groupByDirection <P extends Point>(
    directionPickStrategies: DirectionPickStrategies,
    selfPoint: P,
    otherPoints: P[]
): (directionGroupName: Direction) => P[] {
    const getZone = groupPointsIntoZones(selfPoint, otherPoints, MAX_ZONE_COUNT)

    return (directionGroupName: Direction): P[] => {
        const aliasIndex = zoneAliases.indexOf(directionGroupName)

        // directionGroupName is not valid
        if (aliasIndex === -1) {
            throw new Error(`directionGroupName is not valid: ${directionGroupName}`)
        }

        // [Alias]     -> [Alias Index] -> [Zone Numbers(0 based)]      -> [Sibling Zones(from left to right)]
        // UP         -> 0              -> 12, 13, 14, 15, 0 , 1, 2, 3  -> [5, 6, 7], [6, 7], [7], [], [], [1], [1, 2], [1, 2, 3]
        // UP_RIGHT   -> 1              -> 14, 15, 0, 1, 2, 3, 4, 5     -> [6, 7, 0], [7, 0], [0], [], [], [2], [2, 3], [2, 3, 4]
        // RIGHT      -> 2              -> 0, 1, 2, 3, 4, 5, 6, 7       -> [7, 0, 1], [0, 1], [1], [], [], [3], [3, 4], [3, 4, 5]
        // DOWN_RIGHT -> 3              -> 2, 3, 4, 5, 6, 7, 8, 9       -> [0, 1, 2], [1, 2], [2], [], [], [4], [4, 5], [4, 5, 6]
        // DOWN       -> 4              -> 4, 5, 6, 7, 8, 9, 10, 11     -> [1, 2, 3], [2, 3], [3], [], [], [5], [5, 6], [5, 6, 7]
        // DOWN_LEFT  -> 5              -> 6, 7, 8, 9, 10, 11, 12, 13   -> [2, 3, 4], [3, 4], [4], [], [], [6], [6, 7], [6, 7, 0]
        // LEFT       -> 6              -> 8, 9, 10, 11, 12, 13, 14, 15 -> [3, 4, 5], [4, 5], [5], [], [], [7], [7, 0], [7, 0, 1]
        // UP_LEFT    -> 7              -> 10, 11, 12, 13, 14, 15, 0, 1 -> [4, 5, 6], [5, 6], [6], [], [], [0], [0, 1], [0, 1, 2]
        // We iterate each zone alias index for get relative temp data to the target zone
        const zoneNumbersInRange = zoneAliasIndices
            .reduce<PointWithPosition<P>[]>(
                (acc, index) => {
                    // calculate current the Zone Number of the current zone index
                    const zoneNumber = mod(aliasIndex * 2 - QUARTER_MAX_ZONE_COUNT + index, 0, MAX_ZONE_COUNT - 1)
                    // calculate the Zone Numbers Sequence of the current zone index
                    const siblingZoneIndexSeq = zoneAliasIndices.map(shift => mod(aliasIndex + shift + QUARTER_MAX_ZONE_COUNT + 1, 0, HALF_MAX_ZONE_COUNT - 1))
                    // calculate the sibling zones from indices ahead to indices behind 
                    const toTestSiblingZoneIndices = (() => {
                        const siblingConditionsLength = index < QUARTER_MAX_ZONE_COUNT
                        ? QUARTER_MAX_ZONE_COUNT - index - 1
                        : index - QUARTER_MAX_ZONE_COUNT
                        const zoneChunkStartIndex = Math.min(index, QUARTER_MAX_ZONE_COUNT)

                        return siblingZoneIndexSeq.slice(zoneChunkStartIndex, zoneChunkStartIndex + siblingConditionsLength)
                    })()
                    // if the sibling zones doesn't in PickStrategy, we count this zone into the target zone
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    const shouldZoneBeCounted = !toTestSiblingZoneIndices.some(zoneIndex => directionPickStrategies[zoneAliases[zoneIndex]!])

                    return shouldZoneBeCounted ? acc.concat(getZone(zoneNumber + 1)) : acc
                },
                [],
            )

        const directionPickStrategy = directionPickStrategies[directionGroupName]

        const directionDegree = 360 * aliasIndex / zoneAliases.length

        return directionPickStrategy ? extractSortedPoints(
            directionPickStrategy,
            directionDegree,
            zoneNumbersInRange,
        ) : []
    }
}
