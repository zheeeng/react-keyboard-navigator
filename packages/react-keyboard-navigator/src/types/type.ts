export type KeyboardDirection = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' | 'UP_LEFT' | 'UP_RIGHT' | 'DOWN_LEFT' | 'DOWN_RIGHT'

export type DirectionDetails = { key: string, strategy: DistanceStrategy }
export type DirectionKeyMap = Partial<Record<KeyboardDirection, string>>
export type DirectionMap = Partial<Record<KeyboardDirection, DirectionDetails | undefined>>

export type DistanceStrategy = 'Distance' | 'Secant' | 'Cosine' | 'Sine' | 'Tangent' | ((distance: number, angleDegree: number) => number)
