import { RefObject, useRef } from 'react'
import { TCoords, TImage, TText, TVector } from '@/types/type'
import { useActions } from '@/hooks/useActions'
import { useDoc } from '@/hooks/useDoc'

type TRefItemInfo = {
  elementRef: RefObject<HTMLDivElement>
}

type TItemInfo = TRefItemInfo & {
  startCoords: TCoords
}

type onDragFn = (e: MouseEvent) => void

const useDnd = (objId: number) => {
  const itemsRef = useRef<TItemInfo[]>([])
  const { changeObjectCoordsAction } = useActions()
  const { slides, size } = useDoc()
  let movedObj: TText | TImage | TVector | null = null
  slides.forEach(slide => {
    slide.objects.forEach(obj => {
      if (obj.id === objId) movedObj = obj
    })
  })

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
      const parentX: number =
        item.elementRef.current!.parentElement!.getBoundingClientRect().left
      const parentY: number =
        item.elementRef.current!.parentElement!.getBoundingClientRect().top
      item.startCoords.x =
        item.elementRef.current!.getBoundingClientRect().left - parentX
      item.startCoords.y =
        item.elementRef.current!.getBoundingClientRect().top - parentY

      const onDrag = (dragEvt: MouseEvent) => {
        const stroke: number | null = null
        let newY: number =
          item.startCoords.y - mouseDownEvt.clientY + dragEvt.clientY
        if (newY < 0) newY = 0
        if (newY > size.height - movedObj!.size.height)
          newY = size.height - movedObj!.size.height
        let newX: number =
          item.startCoords.x - mouseDownEvt.clientX + dragEvt.clientX
        if (newX < 0) newX = 0
        if (newX > size.width - movedObj!.size.width)
          newX = size.width - movedObj!.size.width
        item.elementRef.current!.style.position = 'absolute'
        item.elementRef.current!.style.zIndex = '1'
        item.elementRef.current!.style.top = `${newY}px`
        item.elementRef.current!.style.left = `${newX}px`
      }

      const onDrop = () => {
        item.elementRef.current!.style.zIndex = ''
        window.removeEventListener('mousemove', onDrag)
        window.removeEventListener('mouseup', onDrop)
        changeObjectCoordsAction(
          objId,
          item.elementRef.current!.getBoundingClientRect().left - parentX,
          item.elementRef.current!.getBoundingClientRect().top - parentY,
        )
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
