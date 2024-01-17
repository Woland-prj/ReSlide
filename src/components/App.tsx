import Layout from '@/components/Layout/Layout'
import { useEditor } from '@/hooks/useEditor'
import { AppMode } from '@/types/type'
import TopMenu from '@ui/app_menu/TopMenu'
import { FC } from 'react'
import SlideShow from './slideshow/SlideShow'
const App: FC = () => {
  const { appMode } = useEditor()
  return appMode === AppMode.EDIT_MODE ? (
    <>
      <TopMenu />
      <Layout></Layout>
    </>
  ) : (
    <SlideShow />
  )
}

export default App
