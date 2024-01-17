import {
  baseActions,
  devActions,
  textActions,
  vectorActions,
} from '@/data/actions_menu_buttons.data'
import { useDoc } from '@/hooks/useDoc'
import { useEditor } from '@/hooks/useEditor'
import { ObjectType } from '@/types/type'
import { FC, useEffect, useState } from 'react'
import ActionsBlock from './ActionsBlock'
import styles from './ActionsMenu.module.css'

const ActionsMenu: FC = () => {
  const { activeSlideId, selectedObjectsIds } = useEditor()
  const doc = useDoc()
  const [selObjType, setSelObjType] = useState<ObjectType | null>(null)
  useEffect(() => {
    const object = doc.slides[activeSlideId].objects[selectedObjectsIds[0]]
    if (selectedObjectsIds.length == 1) setSelObjType(object.type)
    else if (selectedObjectsIds.length == 0) setSelObjType(null)
  }, [selectedObjectsIds])
  return (
    <div className={styles.actions_menu}>
      <ActionsBlock actions={baseActions} />
      {(selObjType == ObjectType.Text && (
        <ActionsBlock actions={textActions} />
      )) ||
        (selObjType == ObjectType.Vector && (
          <ActionsBlock actions={vectorActions} />
        ))}
      <ActionsBlock actions={devActions} />
    </div>
  )
}

export default ActionsMenu

//   const getSelectedObjectType = (): ObjectType | null=> {
//   let isSame: boolean = false
//   selectedObjectsIds.forEach(id => {
//     if (slides[])
//   })
//   return
// }
