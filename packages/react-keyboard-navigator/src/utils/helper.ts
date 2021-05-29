export function isObject (testItem: unknown): testItem is Record<string, unknown> {
    return typeof testItem === 'object' && testItem !== null
}

export function objectMap <T extends Record<string, unknown>, U>(item: T, mapper: (i: T[keyof T], key: keyof T) => U) {
    return Object.keys(item).reduce(
        (rec, key: keyof T) => {
            rec[key] = mapper(item[key], key)

            return rec
        },
        {} as Record<keyof T, U>,
    )
}