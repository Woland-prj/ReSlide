import { menu_buttons } from '@/data/top_menu_buttons.data'
import TextButton from '@ui/app_menu/top_menu/TextButton'
import { FC } from 'react'
import styles from './MenuButtons.module.css'

const MenuButtons: FC = () => {
  return (
    <div className={styles.MenuButtons}>
      {menu_buttons.map(button => (
        <TextButton key={button.name} button={button}></TextButton>
      ))}
    </div>
  )
}

export default MenuButtons
