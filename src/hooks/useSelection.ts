import { RefObject } from 'react'
import { useActions } from './useActions'

const useSelection = (objId: number) => {
  const { setObjectSelection } = useActions()

  const setSelection = (itemRef: RefObject<HTMLDivElement>): (() => void) => {
    const realizeSelection = () => {
      console.log('active select')
      setObjectSelection(objId, true)
      const realizeUnselection = () => {
        console.log('active unselect')
        setObjectSelection(objId, false)
        itemRef.current?.parentElement?.removeEventListener(
          'click',
          realizeUnselection,
        )

        setTimeout(() => {
          itemRef.current?.addEventListener('click', realizeSelection)
        }, 100)
      }

      setTimeout(() => {
        itemRef.current?.parentElement?.addEventListener(
          'click',
          realizeUnselection,
        )
      }, 100)

      itemRef.current?.removeEventListener('click', realizeSelection)
    }

    itemRef.current?.addEventListener('click', realizeSelection)
    return realizeSelection
  }

  const deleteSelection = (
    itemRef: RefObject<HTMLDivElement>,
    setFn: () => void,
  ) => {
    itemRef.current?.removeEventListener('click', setFn)
  }

  return { setSelection, deleteSelection }
}

export default useSelection
