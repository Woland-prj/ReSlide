import { menu_buttons } from '@/data/top_menu_buttons.data'
import TextButton from '@ui/app_menu/top_menu/TextButton'
import { FC } from 'react'
import styles from '../TopMenu.module.css'

const MenuButtons: FC = () => {
  return (
    <div className={styles.button_block}>
      {menu_buttons.map(button => (
        <TextButton key={button.name} button={button}></TextButton>
      ))}
    </div>
  )
}

export default MenuButtons
