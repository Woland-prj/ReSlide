import { doc, slide2 } from '@/data/data_max'
import Slide from '@slide/Slide'
import TopMenu from '@ui/app_menu/top_menu/TopMenu'
import { FC } from 'react'

const App: FC = () => {
  return (
    <>
      <TopMenu presentationName={doc.name} />
      <Slide slide={slide2} />
    </>
  )
}

export default App
