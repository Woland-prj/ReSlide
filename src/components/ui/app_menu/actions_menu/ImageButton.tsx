import { TActionsButton } from '@/types/action_buttons.type'
import { FC } from 'react'
import styles from './ActionsMenu.module.css'

type ImageButtonProps = {
  button: TActionsButton
}

const ImageButton: FC<ImageButtonProps> = ({ button }) => {
  return (
    <button className={styles.image_button}>
      <img src={button.iconUrl} alt={button.name} />
    </button>
  )
}

export default ImageButton
