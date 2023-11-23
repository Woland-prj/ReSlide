import { doc } from '@/data/data_max'
import TopMenu from '@ui/app_menu/top_menu/TopMenu'
import Slide from '@slide/Slide'
import { FC } from 'react'
import Layout from '@/components/Layout/Layout'

const App: FC = () => {
  return (
    <>
      <TopMenu presentationName={doc.name} />
      <Layout></Layout>
    </>
  )
}

export default App
