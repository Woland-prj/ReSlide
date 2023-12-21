import { RefObject } from 'react'
import { useActions } from './useActions'

const useSelection = (objId: number) => {
  const { setObjectSelection } = useActions()

  const setSelection = (itemRef: RefObject<HTMLDivElement>): (() => void) => {
    const realizeSelection = () => {
      setObjectSelection(objId, true)
      const realizeUnselection = () => {
        setObjectSelection(objId, false)
        window.removeEventListener('click', realizeUnselection)
      }
      window.addEventListener('click', realizeUnselection)
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
}
