import { doc } from '@/data/data_max'
import TopMenu from '@ui/app_menu/top_menu/TopMenu'
import { SlidePreview } from '@ui/slidebar/SlidePreview'
import { FC } from 'react'

const App: FC = () => {
  return (
    <>
      <TopMenu presentationName={doc.name} />
      <SlidePreview slides={doc.slides} />
    </>
  )
}

export default App
