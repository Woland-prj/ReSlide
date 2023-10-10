import { FC } from 'react'
import MenuButtons from '@ui/top_menu/MenuButtons'
import PresentationName from '@ui/top_menu/PresentationName'
import MenuLogo from '@ui/top_menu/MenuLogo'
type TopMenuProps = {
  presentationName: string
}

const TopMenu: FC<TopMenuProps> = ({ presentationName }) => {
  return (
    <>
      <MenuLogo />
      <PresentationName name={presentationName}></PresentationName>
      <MenuButtons />
    </>
  )
}

export default TopMenu
