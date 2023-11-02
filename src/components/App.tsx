import { doc } from '@/data/data_max'
import Slide from '@slide/Slide'
import TopMenu from '@ui/app_menu/top_menu/TopMenu'
import { SlidePreview } from '@ui/slidebar/SlidePreview'
import { FC } from 'react'

const App: FC = () => {
  return (
    <>
      <TopMenu presentationName={doc.name} />
      <Slide slide={doc.slides[1]}></Slide>
    </>
  )
}

export default App
