import { useButtonAction } from '@/hooks/useButtonAction'
import { TContextButton } from '@/types/menu_buttons.type'
import { FC } from 'react'
import styles from './SubMenu.module.css'

type SubMenuButtonProps = {
  button: TContextButton
  key: string
}

export const SubMenuButton: FC<SubMenuButtonProps> = ({ button }) => {
  const buttonRef = useButtonAction(button.name)
  return (
    <button ref={buttonRef} className={styles.SubMenuButtons} key={button.name}>
      {button.name}
    </button>
  )
}
