import { TMenuButton } from '@/types/menu_buttons.type'
import { FC, useState } from 'react'
import SubMenu from './SubMenu'
import styles from '../TopMenu.module.css'

type TextButtonProps = {
  button: TMenuButton
}

const TextButton: FC<TextButtonProps> = ({ button }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleSubMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <div className={styles.TextButton}>
      <button onClick={toggleSubMenu} className={styles.text_button}>
        {button.name}
      </button>
      {isMenuOpen && (
        <SubMenu
          buttons={button.contextButtons}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </div>
  )
}

export default TextButton
