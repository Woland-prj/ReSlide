import { baseActions } from '@/data/actions_menu_buttons.data'
import { FC } from 'react'
import styles from '../actions_menu/ActionsMenu.module.css'
import ImageButton from './ImageButton'

export const BaseActions: FC = () => {
  return (
    <div className={styles.BaseActions}>
      {baseActions.map(button => (
        <ImageButton key={button.id} button={button}></ImageButton>
      ))}
      {/* <TextInputButton placeholder='Введите размер шрифта'></TextInputButton>
      <TextInputButton placeholder='Введите название шрифта'></TextInputButton>
      <TextInputButton></TextInputButton>
      <ColorInputButton></ColorInputButton>
      <ColorInputButton></ColorInputButton> */}
    </div>
  )
}
