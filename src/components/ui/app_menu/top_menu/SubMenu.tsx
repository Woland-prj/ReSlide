import { TContextButton } from '@/types/menu_buttons.type'
import { FC } from 'react'
import styles from './SubMenu.module.css'
import { useButtonAction } from '@/hooks/useButton'
type TSubMenuProps = {
  buttons: TContextButton[]
}

const SubMenu: FC<TSubMenuProps> = ({ buttons }) => {
  const buttonRef = useButtonAction(button.name)
  // TODO: компонент для кнопки в SubMenu
  return (
    <div className={styles.SubMenu}>
      {buttons.map(button => (
        <button ref={buttonRef} className={styles.SubMenuButtons} key={button.name}>
          {button.name}
        </button>
      ))}
    </div>
  )
}

export default SubMenu
