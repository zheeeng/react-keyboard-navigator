import { useState } from 'react'
import { useCallback, useEffect } from 'react'

export const useNextTickCallback = <Params extends unknown[]>(handler: (...params: P) => unknown): (...params: Params) => void => {
    const [params, setParams] = useState<Params>()

    useEffect(
        () => {
            if (!params) {
                return
            }

            handler(...params)
        },
        [handler, params]
    )

    const trigger = useCallback((...params: Params) => setParams(params), [])
  
    return trigger
}
