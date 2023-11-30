import { RefObject, useRef } from 'react'
import { TCoords } from '@/types/type'

type TRefItemInfo = {
  elementRef: RefObject<HTMLDivElement>
}

type TItemInfo = TRefItemInfo & {
  startCoords: TCoords
}

type onDragFn = (e: MouseEvent) => void

const useDnd = () => {
  const itemsRef = useRef<TItemInfo[]>([])

  const registerItemFn = (index: number, info: TRefItemInfo): onDragFn => {
    const item: TItemInfo = {
      ...info,
      startCoords: {
        x: 0,
        y: 0,
      },
    }

    itemsRef.current![index] = item

    const onDragStart = (mouseDownEvt: MouseEvent) => {
      item.startCoords.x =
        item.elementRef.current!.getBoundingClientRect().left -
        item.elementRef.current!.parentElement!.getBoundingClientRect().left
      item.startCoords.y =
        item.elementRef.current!.getBoundingClientRect().top -
        item.elementRef.current!.parentElement!.getBoundingClientRect().top

      const onDrag = (dragEvt: MouseEvent) => {
        item.elementRef.current!.style.position = 'absolute'
        item.elementRef.current!.style.zIndex = '1'
        item.elementRef.current!.style.top = `${
          item.startCoords.y - mouseDownEvt.clientY + dragEvt.clientY
        }px`
        item.elementRef.current!.style.left = `${
          item.startCoords.x - mouseDownEvt.clientX + dragEvt.clientX
        }px`

        console.log(
          item.startCoords.x + dragEvt.clientX,
          item.startCoords.y + dragEvt.clientY,
        )
      }

      const onDrop = () => {
        item.elementRef.current!.style.zIndex = ''
        window.removeEventListener('mousemove', onDrag)
        window.removeEventListener('mouseup', onDrop)
      }

      window.addEventListener('mousemove', onDrag)
      window.addEventListener('mouseup', onDrop)
    }

    item.elementRef.current?.addEventListener('mousedown', onDragStart)

    return onDragStart
  }

  const unregisterItemFn = (index: number, onDragFn: onDragFn) => {
    itemsRef.current![index].elementRef.current?.removeEventListener(
      'mousedown',
      onDragFn,
    )
  }

  return { registerItemFn, unregisterItemFn }
}

export default useDnd
