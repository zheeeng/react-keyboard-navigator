import { useCallback, useLayoutEffect, useRef } from 'react'

export const useValueGetter = <V>(value: V): () => V => {
    const valueRef = useRef<V>(value)
  
    useLayoutEffect(() => {
      valueRef.current = value
    })
  
    return useCallback<() => V>(() => valueRef.current, [])
}
