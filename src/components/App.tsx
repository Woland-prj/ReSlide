import { doc } from '@/data/data_max'
import TopMenu from '@ui/app_menu/top_menu/TopMenu'
import { FC } from 'react'
import { SlidePreview } from '@ui/slidebar/SlidePreview'
import Slide from '@slide/Slide'

const App: FC = () => {
  return (
    <>
      <TopMenu presentationName={doc.name} />
      <SlidePreview slides={doc.slides}></SlidePreview>
      <Slide slide={doc.slides[1]}></Slide>
    </>
  )
}

export default App
