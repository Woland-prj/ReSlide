import { TActionsButton } from '@/types/action_buttons.type'
import { FC, useState } from 'react'
import SubMenu from './SubMenu'

type TextButtonProps = {
  button: TActionsButton
}

const TextButton: FC<TextButtonProps> = ({ button }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleSubMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <>
      <button onClick={toggleSubMenu} className='TextButton'>
        {button.name}
      </button>
      {/* {isMenuOpen && <SubMenu buttons={button.iconUrl} />} */}
    </>
  )
}

export default TextButton
