import { TContextButton } from '@/types/menu_buttons.type'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import styles from './SubMenu.module.css'
import { SubMenuButton } from './SubMenuButton'

type TSubMenuProps = {
  buttons: TContextButton[]
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const SubMenu: FC<TSubMenuProps> = ({ buttons, setIsMenuOpen }) => {
  // useEffect(() => {
  //   const toggleFn = () => setIsMenuOpen(false)
  //   window.addEventListener('click', toggleFn)
  //   return () => window.removeEventListener('click', toggleFn)
  // }, [])

  // TODO: компонент для кнопки в SubMenu
  return (
    <div className={styles.sub_menu}>
      {buttons.map(button => (
        <SubMenuButton key={button.name} button={button}></SubMenuButton>
      ))}
    </div>
  )
}

export default SubMenu
