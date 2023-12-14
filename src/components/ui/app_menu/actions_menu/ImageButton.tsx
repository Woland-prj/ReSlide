import { TActionsButton } from '@/types/action_buttons.type'
import { FC } from 'react'
import styles from './ActionsMenu.module.css'
import { useButtonAction } from '@/hooks/useButtonAction'
import { useEditor } from '@/hooks/useEditor'
import cn from 'clsx'

type ImageButtonProps = {
  button: TActionsButton
}

const ImageButton: FC<ImageButtonProps> = ({ button }) => {
  const buttonRef = useButtonAction(button.id)
  const { activeToolId } = useEditor()
  return (
    <button
      className={cn(
        styles.image_button,
        activeToolId == button.id && styles.active,
      )}
      ref={buttonRef}
    >
      <img src={button.iconUrl} alt={button.id} />
    </button>
  )
}

export default ImageButton
