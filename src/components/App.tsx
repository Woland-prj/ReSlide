import { doc, vector } from '@/data/data_max'
import TopMenu from '@ui/app_menu/top_menu/TopMenu'
import Vector from '@ui/slide/shapes/Vector'
import { FC } from 'react'

const App: FC = () => {
  return (
    <>
      <TopMenu presentationName={doc.name} />
      <Vector vector={vector} />
    </>
  )
}

export default App
