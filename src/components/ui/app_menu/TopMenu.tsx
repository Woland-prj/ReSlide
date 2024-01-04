import MenuButtons from '@ui/app_menu/top_menu/MenuButtons'
import MenuLogo from '@ui/app_menu/top_menu/MenuLogo'
import PresentationName from '@ui/app_menu/top_menu/PresentationName'
import { FC } from 'react'
import styles from './TopMenu.module.css'
import ActionsMenu from './actions_menu/ActionsMenu'

const TopMenu: FC = () => {
  return (
    <>
      <div className={styles.top_menu}>
        <MenuLogo />
        <div>
          <PresentationName />
          <MenuButtons />
        </div>
      </div>
      <ActionsMenu></ActionsMenu>
    </>
  )
}

export default TopMenu
