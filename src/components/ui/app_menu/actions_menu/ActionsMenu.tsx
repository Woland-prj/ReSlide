import { baseActions, devActions } from '@/data/actions_menu_buttons.data'
import { FC } from 'react'
import ActionsBlock from './ActionsBlock'
import styles from './ActionsMenu.module.css'

const ActionsMenu: FC = () => {
  return (
    <div className={styles.actions_menu}>
      <ActionsBlock actions={baseActions} />
      <ActionsBlock actions={devActions} />
    </div>
  )
}

export default ActionsMenu
