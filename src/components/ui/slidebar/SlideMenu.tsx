import { FC } from 'react'
import { TSlide } from 'types/type'
import { SlidePreview } from '@ui/slidebar/SlidePreview'

type SlideMenuProps = {
  slides: TSlide[]
}

const SlideMenu: FC<SlideMenuProps> = ({ slides }) => {
  return <SlidePreview />
}
export default SlideMenu
