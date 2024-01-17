import {
  baseActions,
  devActions,
  textActions,
  vectorActions,
} from '@/data/actions_menu_buttons.data'
import { useDoc } from '@/hooks/useDoc'
import { useEditor } from '@/hooks/useEditor'
import { ObjectType } from '@/types/type'
import { FC } from 'react'
import ActionsBlock from './ActionsBlock'
import styles from './ActionsMenu.module.css'

const ActionsMenu: FC = () => {
  const { selectedObjectsIds, activeSlideId } = useEditor()
  const { slides } = useDoc()

  return (
    <div className={styles.actions_menu}>
      <ActionsBlock actions={baseActions} />
      {(getSelectedObjectType() == ObjectType.Text && (
        <ActionsBlock actions={textActions} />
      )) ||
        (getSelectedObjectType() == ObjectType.Vector && (
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
