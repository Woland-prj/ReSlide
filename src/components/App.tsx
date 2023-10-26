import { doc, vector } from '@/data/data_max'
import TopMenu from '@ui/app_menu/top_menu/TopMenu'
import Rectangle from '@ui/slide/shapes/Rectangle'
import { FC } from 'react'

const App: FC = () => {
  return (
    <>
      <TopMenu presentationName={doc.name} />
      <Rectangle vector={vector} />
    </>
  )
}

export default App
