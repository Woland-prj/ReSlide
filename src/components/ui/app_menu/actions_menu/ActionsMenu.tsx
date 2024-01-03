import { baseActions } from '@/data/actions_menu_buttons.data'
import { FC } from 'react'
import ActionsBlock from './ActionsBlock'
import styles from './ActionsMenu.module.css'

const ActionsMenu: FC = () => {
  return (
    <div className={styles.actions_menu}>
      <ActionsBlock actions={baseActions} />
    </div>
  )
}

export default ActionsMenu
