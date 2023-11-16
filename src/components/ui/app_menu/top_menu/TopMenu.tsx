import MenuButtons from '@ui/app_menu/top_menu/MenuButtons'
import MenuLogo from '@ui/app_menu/top_menu/MenuLogo'
import PresentationName from '@ui/app_menu/top_menu/PresentationName'
import { FC } from 'react'
type TopMenuProps = {
  presentationName: string
}

const TopMenu: FC<TopMenuProps> = ({ presentationName }) => {
  return (
    <>
      <MenuLogo />
      <PresentationName name={presentationName}></PresentationName>
      <MenuButtons />
      <ImageButtons />
    </>
  )
}

export default TopMenu
