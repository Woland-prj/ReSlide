import { RefObject, useEffect } from 'react'
import { useActions } from './useActions'
import { useDoc } from './useDoc'
import { useEditor } from './useEditor'

interface KeyboardEvent {
  key: string
}

export const useGlobalHandlers = (layoutRef: RefObject<HTMLDivElement>) => {
  const { activeSlideId, selectedObjectsIds } = useEditor()
  const { slides } = useDoc()
  const {
    deleteObjectAction,
    removeSelectedObjectIdAction,
    setShiftPressedAction,
  } = useActions()
  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Delete')
        slides[activeSlideId].objects.forEach(object => {
          if (selectedObjectsIds.find(id => id === object.id) != undefined)
            deleteObjectAction(object.id)
        })
      if (e.key === 'Shift') setShiftPressedAction(true)
    }
    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.key === 'Shift') setShiftPressedAction(false)
    }
    const inActiveAllStatesHandler = () => {
      selectedObjectsIds.forEach(id => {
        removeSelectedObjectIdAction(id)
      })
    }
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)
    layoutRef.current?.addEventListener('click', inActiveAllStatesHandler)
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      document.addEventListener('keyup', keyUpHandler)
      layoutRef.current?.removeEventListener('click', inActiveAllStatesHandler)
    }
  }, [slides, activeSlideId, selectedObjectsIds])
}
