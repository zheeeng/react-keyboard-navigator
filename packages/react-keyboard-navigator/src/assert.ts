export function assertExist <T>(item: T | undefined, message: string): asserts item is T {
    if (item === undefined) {
        throw new Error(message)
    }
}