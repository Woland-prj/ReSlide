import { RefObject } from 'react'
import { useActions } from './useActions'

const useSelection = (objId: number) => {
  const { setObjectSelection } = useActions()

  const setSelection = (itemRef: RefObject<HTMLDivElement>): (() => void) => {
    const realizeSelection = () => {
      setObjectSelection(objId, true)
      console.log('select state active')
      const realizeUnselection = () => {
        console.log('unselect state active')
        setObjectSelection(objId, false)
        itemRef.current?.parentElement?.removeEventListener(
          'click',
          realizeUnselection,
        )
      }
      setTimeout(
        () =>
          itemRef.current?.parentElement?.addEventListener(
            'click',
            realizeUnselection,
          ),
        300,
      )
    }

    itemRef.current?.addEventListener('click', realizeSelection)
    return realizeSelection
  }

  const deleteSelection = (
    itemRef: RefObject<HTMLDivElement>,
    setFn: () => void,
  ) => {
    itemRef.current?.addEventListener('click', setFn)
  }

  return { setSelection, deleteSelection }
}

export default useSelection
