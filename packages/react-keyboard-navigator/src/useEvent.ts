import { useCallback, useLayoutEffect, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useEvent = <F extends (...args: any[]) => unknown>(handler: F): F => {
    const handlerRef = useRef<F | null>(null)
  
    useLayoutEffect(() => {
      handlerRef.current = handler
    })
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return useCallback<F>(((...args: Parameters<F>) => handlerRef.current?.(...args)) as F, [])
}


