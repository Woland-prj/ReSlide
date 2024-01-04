import Layout from '@/components/Layout/Layout'
import TopMenu from '@ui/app_menu/TopMenu'
import { FC } from 'react'

const App: FC = () => {
  return (
    <>
      <TopMenu />
      <Layout></Layout>
    </>
  )
}

export default App
