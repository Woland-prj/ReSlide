import { useButtonAction } from '@/hooks/useButtonAction'
import { useEditor } from '@/hooks/useEditor'
import { TActionsButton } from '@/types/action_buttons.type'
import cn from 'clsx'
import { FC, useState } from 'react'
import SubMenu from '../top_menu/SubMenu'
import styles from './ActionsMenu.module.css'

type ImageButtonProps = {
  button: TActionsButton
}

const ImageButton: FC<ImageButtonProps> = ({ button }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  let buttonRef
  button.contextMenu
    ? (buttonRef = useButtonAction(button.id, setIsMenuOpen))
    : (buttonRef = useButtonAction(button.id))
  const { activeToolId } = useEditor()
  return (
    <div className={styles.button_wrapper}>
      <button
        className={cn(
          styles.image_button,
          activeToolId == button.id && styles.active,
        )}
        ref={buttonRef}
      >
        <img src={button.iconUrl} alt={button.id} />
      </button>
      {button.contextMenu && isMenuOpen && (
        <SubMenu buttons={button.contextMenu} setIsMenuOpen={setIsMenuOpen} />
      )}
    </div>
  )
}

export default ImageButton
