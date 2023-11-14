import Layout from '@/components/Layout/Layout'
import { doc } from '@/data/data_max'
import TopMenu from '@ui/app_menu/top_menu/TopMenu'
import { FC } from 'react'

const App: FC = () => {
  return (
    <>
      <TopMenu presentationName={doc.name} />
      <Layout></Layout>
    </>
  )
}

export default App
