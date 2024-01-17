import { getIndexById } from '@/services/getIndexById.service'
import { TSlide } from '@/types/type'
import { RefObject, useEffect } from 'react'
import { useActions } from './useActions'
import { useDoc } from './useDoc'
import { useEditor } from './useEditor'

interface KeyboardEvent {
  key: string
}

export const useGlobalHandlers = (layoutRef: RefObject<HTMLDivElement>) => {
  const { activeSlideId, selectedObjectsIds, isShiftPressed } = useEditor()
  const { slides } = useDoc()
  const {
    deleteObjectAction,
    removeSelectedObjectIdAction,
    setShiftPressedAction,
    deleteSlideAction,
    setActiveSlideAction,
  } = useActions()
  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Delete') {
        const activeIndex = getIndexById<TSlide>(slides, activeSlideId)
        console.log(activeSlideId, activeIndex, slides.length > 1)
        if (isShiftPressed) {
          deleteSlideAction(activeSlideId)
          let newActiveId: number = -1
          if (activeIndex != null)
            if (activeIndex > 0) newActiveId = slides[activeIndex - 1].id
            else
              newActiveId = slides.length > 1 ? slides[activeIndex + 1].id : -27
          console.log(newActiveId)
          setActiveSlideAction(newActiveId)
        }
        slides[activeIndex!].objects.forEach(object => {
          console.log(object)
          if (selectedObjectsIds.find(id => id === object.id) != undefined)
            deleteObjectAction(object.id)
        })
      }
      if (e.key === 'Shift') setShiftPressedAction(true)
    }
    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.key === 'Shift') setShiftPressedAction(false)
    }
    const inActiveAllStatesHandler = () => {
      setTimeout(() => {
        selectedObjectsIds.forEach(id => {
          removeSelectedObjectIdAction(id)
        })
      }, 100)
    }
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)
    layoutRef.current?.addEventListener('mousedown', inActiveAllStatesHandler)
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      document.addEventListener('keyup', keyUpHandler)
      layoutRef.current?.removeEventListener(
        'mousedown',
        inActiveAllStatesHandler,
      )
    }
  }, [slides, activeSlideId, selectedObjectsIds, isShiftPressed])
}
