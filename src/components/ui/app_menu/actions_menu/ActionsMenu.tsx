import {
  baseActions,
  devActions,
  textActions,
  vectorActions,
} from '@/data/actions_menu_buttons.data'
import { ObjectType } from '@/types/type'
import { FC } from 'react'
import ActionsBlock from './ActionsBlock'
import styles from './ActionsMenu.module.css'

const ActionsMenu: FC = () => {
  const getSelectedObjectType = (): ObjectType => {
    // Функция-заглушка на время отсутствующей работающей версии
    return ObjectType.Vector
  }
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
