import { TContextButton } from '@/types/menu_buttons.type'
import { FC } from 'react'
import styles from './SubMenu.module.css'

type TSubMenuProps = {
  buttons: TContextButton[]
}

const SubMenu: FC<TSubMenuProps> = ({ buttons }) => {
  return (
    <div className={styles.SubMenu}>
      {buttons.map(button => (
        <button className={styles.SubMenuButtons} key={button.name}>
          {button.name}
        </button>
      ))}
    </div>
  )
}

export default SubMenu
