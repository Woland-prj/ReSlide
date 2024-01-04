import { RefObject, useRef } from 'react'
import { useActions } from './useActions'

export type TSelectionHandlers = {
  selectHandler: () => void
  unselectHandler: () => void
}

export const useSelection = (objId: number) => {
  const { setObjectSelection } = useActions()
  const handlersRef = useRef<TSelectionHandlers>({
    selectHandler: () => {},
    unselectHandler: () => {},
  })

  const setSelection = (
    itemRef: RefObject<HTMLDivElement>,
  ): TSelectionHandlers => {
    const handlers: TSelectionHandlers = {
      selectHandler: () => {},
      unselectHandler: () => {},
    }

    const realizeSelection = () => {
      //console.log('active select', handlersRef.current)
      setObjectSelection(objId, true)
      const stopProp = (e: MouseEvent) => e.stopPropagation()
      const realizeUnselection = () => {
        //console.log('active unselect', handlersRef.current)
        setObjectSelection(objId, false)
        itemRef.current?.parentElement?.removeEventListener(
          'mousedown',
          realizeUnselection,
        )
        itemRef.current?.removeEventListener('mousedown', stopProp)
        handlersRef.current.unselectHandler = () => {}
        setTimeout(() => {
          itemRef.current?.addEventListener('mousedown', realizeSelection)
          handlersRef.current.selectHandler = realizeSelection
        }, 100)
      }

      setTimeout(() => {
        itemRef.current?.parentElement?.addEventListener(
          'mousedown',
          realizeUnselection,
        )
        handlersRef.current.unselectHandler = realizeUnselection
        itemRef.current?.addEventListener('mousedown', stopProp)
      }, 100)

      itemRef.current?.removeEventListener('mousedown', realizeSelection)
      handlersRef.current.selectHandler = () => {}
      handlers.unselectHandler = realizeUnselection
    }

    itemRef.current?.addEventListener('mousedown', realizeSelection)
    handlers.selectHandler = realizeSelection
    return handlers
  }

  const deleteSelection = (itemRef: RefObject<HTMLDivElement>) => {
    //console.log('unmount', handlersRef.current)
    itemRef.current?.parentElement?.removeEventListener(
      'mousedown',
      handlersRef.current.unselectHandler,
    )
    setObjectSelection(objId, false)
    itemRef.current?.removeEventListener(
      'mousedown',
      handlersRef.current.selectHandler,
    )
  }

  return { setSelection, deleteSelection }
}
