import { TActionsButton } from '@/types/action_buttons.type'
import { FC } from 'react'
import styles from './ActionsMenu.module.css'
import { useButtonAction } from '@/hooks/useButtonAction'

type ImageButtonProps = {
  button: TActionsButton
}

const ImageButton: FC<ImageButtonProps> = ({ button }) => {
  const buttonRef = useButtonAction(button.name)
  return (
    <button className={styles.image_button} ref={buttonRef}>
      <img src={button.iconUrl} alt={button.name} />
    </button>
  )
}

export default ImageButton
