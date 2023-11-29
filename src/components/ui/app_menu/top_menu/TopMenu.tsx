import MenuButtons from '@ui/app_menu/top_menu/MenuButtons'
import MenuLogo from '@ui/app_menu/top_menu/MenuLogo'
import PresentationName from '@ui/app_menu/top_menu/PresentationName'
import { FC } from 'react'
import styles from './TopMenu.module.css'
import ActionsMenu from '../actions_menu/ActionsMenu'

type TopMenuProps = {
  presentationName: string
}

const TopMenu: FC<TopMenuProps> = ({ presentationName }) => {
  return (
    <>
      <div className={styles.LogoAndPresentationName}>
        <MenuLogo />
        <PresentationName name={presentationName}></PresentationName>
      </div>
      <MenuButtons />
      <ActionsMenu></ActionsMenu>
    </>
  )
}

export default TopMenu
