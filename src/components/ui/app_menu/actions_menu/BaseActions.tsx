import { FC } from 'react'
import { baseActions } from '@/data/actions_menu_buttons.data'
import ImageButton from './ImageButton'
import styles from '../actions_menu/ActionsMenu.module.css'

export const BaseActions: FC = () => {
  return (
    <div className={styles.BaseActions}>
      {baseActions.map(button => (
        <ImageButton key={button.id} button={button}></ImageButton>
      ))}
    </div>
  )
}
