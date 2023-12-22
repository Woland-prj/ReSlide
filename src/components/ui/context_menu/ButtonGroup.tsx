import { FC } from 'react'
import ContextMenuButton from './ContextMenuButton'
import { TContextMenuButton } from '@/types/context_menu_buttons.type'

type ButtonGroupProps = {
  buttons: TContextMenuButton[]
}

const ButtonGroup: FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <div>
      {buttons.map(button => (
        <ContextMenuButton key={button?.id} button={button}></ContextMenuButton>
      ))}
    </div>
  )
}

export default ButtonGroup
