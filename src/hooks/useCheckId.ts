import { useLayoutEffect, useState } from 'react'

export const useCheckId = (selectedIds: number[], objId: number) => {
  const [isObjSelected, setIsObjSelected] = useState<boolean>(false)
  useLayoutEffect(() => {
    selectedIds.find(selectedId => selectedId === objId)
      ? setIsObjSelected(true)
      : setIsObjSelected(false)
  }, [selectedIds])
  return isObjSelected
}
