import { useEffect } from 'react'
import { useActions } from './useActions'
import { useDoc } from './useDoc'
import { useEditor } from './useEditor'

export const useGlobalHandlers = () => {
  const { activeSlideId } = useEditor()
  const { slides } = useDoc()
  const { deleteObjectAction } = useActions()
  useEffect(() => {
    const delHandler = (e: KeyboardEvent) => {
      if (e.key === 'Delete')
        slides[activeSlideId].objects.forEach(object => {
          if (object.isSelected) deleteObjectAction(object.id)
        })
    }
    document.addEventListener('keydown', delHandler)
    return () => document.addEventListener('keydown', delHandler)
  }, [slides, activeSlideId])
}
