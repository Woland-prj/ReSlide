import { TContextMenuButton } from '@/types/context_menu_buttons.type'
import { FC } from 'react'
import styles from './ContextMenu.module.css'

type ContextMenuButtonProps = {
  button: TContextMenuButton | undefined
}

const ContextMenuButton: FC<ContextMenuButtonProps> = ({ button }) => {
  const IsThereAnIcon = button?.iconUrl != undefined
  return (
    <button className={styles.context_menu_button}>
      {IsThereAnIcon && (
        <img
          src={button?.iconUrl}
          className={styles.button_image}
          alt={button.name}
        />
      )}
      <span className={styles.button_text}>{button?.name}</span>
    </button>
  )
}

export default ContextMenuButton
