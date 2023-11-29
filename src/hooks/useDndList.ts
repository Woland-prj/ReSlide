import { RefObject, useCallback, useEffect, useRef } from 'react'
import { TCoords } from '@/types/type'

type TItemInfo = {
  elementRef: RefObject<HTMLDivElement>
  startCoords: TCoords
}

const useDnd = () => {
  const itemsRef = useRef<TItemInfo[]>([])

  const registerDndItem = () =>
    useCallback((index: number, info: TItemInfo) => {
      const item: TItemInfo = {
        ...info,
        startCoords: {
          x: 0,
          y: 0,
        },
      }

      itemsRef.current[index] = item

      const onDrag
    }, [])
}

export default useDnd
