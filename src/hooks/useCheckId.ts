import { useEffect, useState } from 'react'
import { useEditor } from './useEditor'

export const useCheckId = (objId: number) => {
  const [isObjSelected, setIsObjSelected] = useState<boolean>(false)
  const { selectedObjectsIds } = useEditor()
  useEffect(() => {
    selectedObjectsIds.find(selectedId => selectedId === objId) != undefined
      ? setIsObjSelected(true)
      : setIsObjSelected(false)
  }, [selectedObjectsIds])
  return isObjSelected
}
