import MenuButtons from '@ui/app_menu/top_menu/MenuButtons'
import MenuLogo from '@ui/app_menu/top_menu/MenuLogo'
import PresentationName from '@ui/app_menu/top_menu/PresentationName'
import { FC } from 'react'
import styles from './TopMenu.module.css'
import ActionsMenu from './actions_menu/ActionsMenu'
import SlideShowButton from './top_menu/slide_show_button/SlideShowButton'

const TopMenu: FC = () => {
  return (
    <>
      <div className={styles.top_menu}>
        <div className={styles.top_menu_wrapper}>
          <MenuLogo />
          <div>
            <PresentationName />
            <MenuButtons />
          </div>
        </div>
        <SlideShowButton text={'Показ слайдов'} />
      </div>
      <ActionsMenu></ActionsMenu>
    </>
  )
}

export default TopMenu
