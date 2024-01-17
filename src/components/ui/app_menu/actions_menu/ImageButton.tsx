import { useButtonAction } from '@/hooks/useButtonAction'
import { useEditor } from '@/hooks/useEditor'
import { TActionsButton } from '@/types/action_buttons.type'
import cn from 'clsx'
import { FC, useState } from 'react'
import SubMenu from '../top_menu/SubMenu'
import styles from './ActionsMenu.module.css'
import { TextInputButton } from './TextInputButton'

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
      {button.id == 'vector_stroke_color_btn'}
      {button.id == 'vector_background_color_btn'}
      {button.id == 'size_btn' && (
        <TextInputButton
          type='number'
          placeholder='Введите название размера'
          submitValue='Подтвердить'
        ></TextInputButton>
      )}
      {button.id == 'font_family_btn' && (
        <TextInputButton
          type='text'
          placeholder='Введите название шрифта'
          submitValue='Подтвердить'
        ></TextInputButton>
      )}
      {button.id == 'text_color_btn'}
    </div>
  )
}

export default ImageButton
