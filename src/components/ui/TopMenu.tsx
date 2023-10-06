import { FC } from 'react'
import MenuButtons from '@ui/MenuButtons'
import PresentationName from '@ui/PresentationName'
type TopMenuProps = {
  presentationName: string
}

const TopMenu: FC<TopMenuProps> = ({ presentationName }) => {
  return (
    <>
      <PresentationName name={presentationName}></PresentationName>
      <MenuButtons></MenuButtons>
    </>
  )
}

export default TopMenu
