import { useActions } from '@/hooks/useActions'
import { useDoc } from '@/hooks/useDoc'
import { TCoords, TImage, TText, TVector } from '@/types/type'
import { RefObject } from 'react'

type TRefItemInfo = {
  elementRef: RefObject<HTMLDivElement>
}

type TItemInfo = TRefItemInfo & {
  startCoords: TCoords
}

type onDragFn = (e: MouseEvent) => void

const useDnd = (objId: number) => {
  const { changeObjectCoordsAction } = useActions()
  const { slides, size } = useDoc()
  let movedObj: TText | TImage | TVector | null = null
  slides.forEach(slide => {
    slide.objects.forEach(obj => {
      if (obj.id === objId) movedObj = obj
    })
  })

  const registerItemFn = (
    elementRef: RefObject<HTMLDivElement>,
    slideRef: RefObject<HTMLDivElement>,
  ): onDragFn => {
    const item: HTMLDivElement = elementRef.current!
    const slide: HTMLDivElement = slideRef.current!

    const onDragStart = (mouseDownEvt: MouseEvent) => {
      console.log('onmousedown')
      const parentX: number = slide.getBoundingClientRect().left
      const parentY: number = slide.getBoundingClientRect().top
      const startCoords: TCoords = {
        x: item.getBoundingClientRect().left - parentX,
        y: item.getBoundingClientRect().top - parentY,
      }

      const onDrag = (dragEvt: MouseEvent) => {
        console.log('onmousemove')
        let newY: number =
          startCoords.y - mouseDownEvt.clientY + dragEvt.clientY
        if (newY < 0) newY = 0
        if (newY > size.height - movedObj!.size.height)
          newY = size.height - movedObj!.size.height
        let newX: number =
          startCoords.x - mouseDownEvt.clientX + dragEvt.clientX
        if (newX < 0) newX = 0
        if (newX > size.width - movedObj!.size.width)
          newX = size.width - movedObj!.size.width
        console.log(startCoords.x, startCoords.y)
        item.style.position = 'absolute'
        item.style.zIndex = '1'
        item.style.top = `${newY}px`
        item.style.left = `${newX}px`
      }

      const onDrop = () => {
        console.log('onmouseup')
        item.style.zIndex = ''
        window.removeEventListener('mousemove', onDrag)
        window.removeEventListener('mouseup', onDrop)
        changeObjectCoordsAction(
          objId,
          item.getBoundingClientRect().left - parentX,
          item.getBoundingClientRect().top - parentY,
        )
      }

      window.addEventListener('mousemove', onDrag)
      window.addEventListener('mouseup', onDrop)
    }

    item.addEventListener('mousedown', onDragStart)

    return onDragStart
  }

  const unregisterItemFn = (
    elementRef: RefObject<HTMLDivElement>,
    onDragFn: onDragFn,
  ) => {
    elementRef.current?.removeEventListener('mousedown', onDragFn)
  }

  return { registerItemFn, unregisterItemFn }
}

export default useDnd
