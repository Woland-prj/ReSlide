import { ResizeDotHandler } from '@/types/resize.type'
import { TCoords, TImage, TText, TVector } from '@/types/type'
import { RefObject } from 'react'
import { useActions } from './useActions'
import { useDoc } from './useDoc'

type TResizeHandlers = {
  onDragStart: (e: MouseEvent) => void
  safeFn: (e: MouseEvent) => void
}

export const useResize = (objId: number, handler: ResizeDotHandler) => {
  const { changeObjectCoordsAction, changeObjectSizeAction } = useActions()
  const { slides } = useDoc()

  const registerItemFn = (
    dotRef: RefObject<HTMLDivElement>,
    elementRef: RefObject<HTMLDivElement>,
  ): TResizeHandlers => {
    const dot: HTMLDivElement = dotRef.current!
    const item: HTMLDivElement = elementRef.current!

    const safeFn = (clickEvt: MouseEvent) => {
      clickEvt.stopPropagation()
    }

    const onDragStart = (mouseDownEvt: MouseEvent) => {
      let movedObj: TText | TImage | TVector | null = null
      slides.forEach(slide => {
        slide.objects.forEach(obj => {
          if (obj.id === objId) movedObj = obj
        })
      })

      mouseDownEvt.stopPropagation()
      const parentCoords: TCoords = {
        x: item.parentElement!.getBoundingClientRect().left,
        y: item.parentElement!.getBoundingClientRect().top,
      }
      const startCoords: TCoords = {
        x: item.getBoundingClientRect().left,
        y: item.getBoundingClientRect().top,
      }

      const onDrag = (dragEvt: MouseEvent) => {
        dragEvt.stopPropagation()
        item.style.zIndex = '1'
        if (movedObj)
          handler(
            dragEvt,
            mouseDownEvt,
            elementRef,
            startCoords,
            parentCoords,
            movedObj.size,
          )
      }

      const onDrop = () => {
        item.style.zIndex = ''
        window.removeEventListener('mousemove', onDrag)
        window.removeEventListener('mouseup', onDrop)
        changeObjectCoordsAction(
          objId,
          item.getBoundingClientRect().left - parentCoords.x,
          item.getBoundingClientRect().top - parentCoords.y,
        )
        console.log(parseFloat(item.style.width), parseFloat(item.style.height))
        changeObjectSizeAction(
          objId,
          parseFloat(item.style.width),
          parseFloat(item.style.height),
        )
      }

      window.addEventListener('mousemove', onDrag)
      window.addEventListener('mouseup', onDrop)
    }

    dot.addEventListener('mousedown', onDragStart)

    return { onDragStart, safeFn }
  }

  const unregisterItemFn = (
    elementRef: RefObject<HTMLDivElement>,
    handlers: TResizeHandlers,
  ) => {
    elementRef.current?.removeEventListener('mousedown', handlers.onDragStart)
  }

  return { registerItemFn, unregisterItemFn }
}
