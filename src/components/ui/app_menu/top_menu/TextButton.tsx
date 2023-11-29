import { TMenuButton } from '@/types/menu_buttons.type'
import { FC, useState } from 'react'
import SubMenu from './SubMenu'
import styles from './TextButton.module.css'

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
      <button onClick={toggleSubMenu} className='TextButton'>
        {button.name}
      </button>
      {isMenuOpen && <SubMenu buttons={button.contextButtons} />}
    </div>
  )
}

export default TextButton
