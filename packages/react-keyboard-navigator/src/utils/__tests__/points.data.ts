function genPoint(centerPoint: { x: number, y: number }, degree: number, length: number, label: string) {
    const radian = Math.PI * degree / 180
    const x = centerPoint.x + length * Math.sin(radian)
    const y = centerPoint.y - length * Math.cos(radian)
    return { x, y, label }
}

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
export const testPoints = {
    centerPoint: { x: 200, y: 200 },
    zone1StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 0 + 1, 100, 'z1'),
    zone2StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 1 + 1, 99, 'z2'),
    zone3StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 2 + 1, 98, 'z3'),
    zone4StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 3 + 1, 97, 'z4'),
    zone5StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 4 + 1, 96, 'z5'),
    zone6StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 5 + 1, 95, 'z6'),
    zone7StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 6 + 1, 94, 'z7'),
    zone8StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 7 + 1, 93, 'z8'),
    zone9StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 8 + 1, 92, 'z9'),
    zone10StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 9 + 1, 91, 'z10'),
    zone11StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 10 + 1, 90, 'z11'),
    zone12StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 11 + 1, 89, 'z12'),
    zone13StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 12 + 1, 88, 'z13'),
    zone14StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 13 + 1, 87, 'z14'),
    zone15StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 14 + 1, 86, 'z15'),
    zone16StartPoint: genPoint({ x: 200, y: 200 }, 22.5 * 15 + 1, 85, 'z16'),
}

export const testPointsList = [
    testPoints.zone1StartPoint, testPoints.zone2StartPoint, testPoints.zone3StartPoint, testPoints.zone4StartPoint,
    testPoints.zone5StartPoint, testPoints.zone6StartPoint, testPoints.zone7StartPoint, testPoints.zone8StartPoint,
    testPoints.zone9StartPoint, testPoints.zone10StartPoint, testPoints.zone11StartPoint, testPoints.zone12StartPoint,
    testPoints.zone13StartPoint, testPoints.zone14StartPoint, testPoints.zone15StartPoint, testPoints.zone16StartPoint,
]
