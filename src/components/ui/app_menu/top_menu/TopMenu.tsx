import MenuButtons from '@ui/app_menu/top_menu/MenuButtons'
import MenuLogo from '@ui/app_menu/top_menu/MenuLogo'
import PresentationName from '@ui/app_menu/top_menu/PresentationName'
import { FC } from 'react'
import ImageButtons from '@ui/app_menu/top_menu/ImageButtons'
import styles from './TopMenu.module.css'

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
      <ImageButtons />
    </>
  )
}

export default TopMenu
