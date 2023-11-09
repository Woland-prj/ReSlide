import { TContextButton } from '@/types/menu_buttons.type'
import { FC } from 'react'

type TSubMenuProps = {
  buttons: TContextButton[]
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
