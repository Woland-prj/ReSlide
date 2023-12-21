import { FC } from 'react'
import styles from './ContextMenu.module.css'
import { TContextMenuButton } from '@/types/context_menu_buttons.type'

type ContextMenuButtonProps = {
  button: TContextMenuButton
}

const ContextMenuButton: FC<ContextMenuButtonProps> = ({ button }) => {
  const IsThereAnIcon = button.iconUrl != undefined
  return (
    <button className={styles.context_menu_button}>
      {IsThereAnIcon && (
        <img src={button.iconUrl} className={styles.button_image} />
      )}
      <span className={styles.button_text}>{button.name}</span>
    </button>
  )
}

export default ContextMenuButton
