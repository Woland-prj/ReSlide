import { RefObject } from 'react'
import { useActions } from './useActions'
import { useEditor } from './useEditor'

type TRealizeSelectionHandler = (e: MouseEvent) => void

export const useSelection = (objId: number) => {
  const { addSelectedObjectIdAction, removeSelectedObjectIdAction } =
    useActions()
  const { selectedObjectsIds, isShiftPressed } = useEditor()
  // const isSelected = useCheckId(objId)

  const setSelection = (
    itemRef: RefObject<HTMLDivElement>,
  ): TRealizeSelectionHandler => {
    const realizeSelection = (e: MouseEvent) => {
      const isSelected =
        selectedObjectsIds.find(id => id === objId) != undefined
      e.stopPropagation()
      if (!isShiftPressed) {
        selectedObjectsIds.forEach(id => removeSelectedObjectIdAction(id))
        addSelectedObjectIdAction(objId)
      }
      if (isShiftPressed) {
        if (!isSelected) addSelectedObjectIdAction(objId)
        if (isSelected) removeSelectedObjectIdAction(objId)
      }
      console.log(selectedObjectsIds, isSelected)
    }

    itemRef.current?.addEventListener('mousedown', realizeSelection)
    return realizeSelection
  }

  const deleteSelection = (
    itemRef: RefObject<HTMLDivElement>,
    handler: TRealizeSelectionHandler,
  ) => {
    itemRef.current?.removeEventListener('mousedown', handler)
  }

  return { setSelection, deleteSelection }
}
