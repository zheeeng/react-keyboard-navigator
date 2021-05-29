export function mod(target: number, lowerBound: number, upperBound: number) {
    const fixedLowerBound = Math.min(lowerBound, upperBound)
    const fixedUpperBound = Math.max(lowerBound, upperBound)

    const numberSpan = fixedUpperBound - fixedLowerBound + 1
    const remainder = (target - fixedLowerBound) % numberSpan
    
    if (remainder < 0) {
        return remainder + numberSpan + fixedLowerBound
    }
    
    return remainder + fixedLowerBound
}
