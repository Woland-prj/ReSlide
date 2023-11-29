import { TActionsButton } from '@/types/action_buttons.type'
import { FC } from 'react'

type TSubMenuProps = {
  buttons: TActionsButton[]
}

const SubMenu: FC<TSubMenuProps> = ({ buttons }) => {
  return (
    <div>
      {buttons.map(button => (
        <div key={button.name}>{button.name}</div>
      ))}
    </div>
  )
}

export default SubMenu
