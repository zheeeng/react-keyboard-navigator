declare const __opaque: unique symbol

export type OpaqueType<T> = T & { [__opaque]: true }

export const createOpaqueTypeConstructor = <T>(createValueWay: () => T): () => OpaqueType<T> => {
    return () => createValueWay() as T & { [__opaque]: true }
}
