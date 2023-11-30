import { TContextButton } from '@/types/menu_buttons.type'
import { FC } from 'react'
import styles from './SubMenu.module.css'
import { SubMenuButton } from './SubMenuButton'

type TSubMenuProps = {
  buttons: TContextButton[]
}

const SubMenu: FC<TSubMenuProps> = ({ buttons }) => {
  // TODO: компонент для кнопки в SubMenu
  return (
    <div className={styles.SubMenu}>
      {buttons.map(button => (
        <SubMenuButton key={button.name} button={button}></SubMenuButton>
      ))}
    </div>
  )
}

export default SubMenu
