import { RefObject } from 'react'
import { useActions } from './useActions'

export type TSelectionHandlers = {
  selectHandler: () => void
  unselectHandler: () => void
}

export const useSelection = (objId: number) => {
  const { setObjectSelection } = useActions()

  const setSelection = (
    itemRef: RefObject<HTMLDivElement>,
  ): TSelectionHandlers => {
    const handlers: TSelectionHandlers = {
      selectHandler: () => {},
      unselectHandler: () => {},
    }

    const realizeSelection = () => {
      console.log('active select')
      setObjectSelection(objId, true)
      const realizeUnselection = () => {
        console.log('active unselect')
        setObjectSelection(objId, false)
        itemRef.current?.parentElement?.removeEventListener(
          'mousedown',
          realizeUnselection,
        )
        itemRef.current?.removeEventListener('mousedown', (e: MouseEvent) =>
          e.stopPropagation(),
        )
        setTimeout(() => {
          itemRef.current?.addEventListener('mousedown', realizeSelection)
        }, 100)
      }

      setTimeout(() => {
        itemRef.current?.parentElement?.addEventListener(
          'mousedown',
          realizeUnselection,
        )
        itemRef.current?.addEventListener('mousedown', (e: MouseEvent) =>
          e.stopPropagation(),
        )
      }, 100)

      itemRef.current?.removeEventListener('mousedown', realizeSelection)
      handlers.unselectHandler = realizeUnselection
    }

    itemRef.current?.addEventListener('mousedown', realizeSelection)
    handlers.selectHandler = realizeSelection
    return handlers
  }

  const deleteSelection = (
    itemRef: RefObject<HTMLDivElement>,
    handlers: TSelectionHandlers,
  ) => {
    itemRef.current?.removeEventListener('mousedown', handlers.selectHandler)
    itemRef.current?.parentElement?.removeEventListener(
      'mousedown',
      handlers.unselectHandler,
    )
  }

  return { setSelection, deleteSelection }
}
