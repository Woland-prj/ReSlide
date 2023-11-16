import { doc } from '@/data/data_max'
import TopMenu from '@ui/app_menu/top_menu/TopMenu'

import Slide from '@slide/Slide'

// Denis
import { FC } from 'react'
import { SlidePreview } from '@ui/slidebar/SlidePreview'
import styles from './App.module.css'

const App: FC = () => {
  return (
    <>
      <TopMenu presentationName={doc.name} />
      <div className={styles.SlideContainer}>
        <SlidePreview slides={doc.slides}></SlidePreview>
        <Slide slide={doc.slides[1]} editable={true}></Slide>
      </div>
    </>
  )
}

export default App
