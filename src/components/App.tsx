import { doc, vector, text } from '@/data/data_max'
import TopMenu from '@ui/app_menu/top_menu/TopMenu'
import Rectangle from '@ui/slide/shapes/Rectangle'
import TextField from '@ui/slide/text/TextField'
import { FC } from 'react'

const App: FC = () => {
  return (
    <>
      <TopMenu presentationName={doc.name} />
      <Rectangle vector={vector} />
      <TextField text={text}></TextField>
    </>
  )
}

export default App
