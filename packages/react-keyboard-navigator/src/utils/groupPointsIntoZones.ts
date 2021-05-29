type PointWithPosition<P extends Point> = [point: P, angle: number, distance: number]

type Point = { x: number, y: number }

export function groupPointsIntoZones <P extends Point>(centerPoint: P, otherPoints: P[], zoneCount: number) {
    const { x: cx, y: cy } = centerPoint

    const otherPointsWithAngle: PointWithPosition<P>[] = otherPoints
        .map<[point: P, vx: number, vy: number]>(p => ([p, p.x - cx, p.y - cy]))
        // offset and magnitude angleDegree value 
        .map<[point: P, angleDegree: number, distance: number]>(([p, vx, vy]) => ([
            p,
            zoneCount * (Math.round((Math.atan2(vy, vx) * 360 / Math.PI + 900) * 10) / 10 % 720),
            Math.sqrt(vx * vx + vy * vy)
        ]))
        .filter(([,, distance]) => distance > 0)

    return (zoneNumber: number) => otherPointsWithAngle
        .filter(([, angleDegree]) => angleDegree >= (720 * zoneNumber - 720) && angleDegree < 720 * zoneNumber)
        // restore degree value
        .map<PointWithPosition<P>>(([p, angleDegree, distance]) => ([p, angleDegree / zoneCount / 2, distance]))
}
