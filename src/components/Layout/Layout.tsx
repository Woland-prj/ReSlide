import { FC } from 'react'
import { SlidePreview } from '@ui/slidebar/SlidePreview'
import { doc } from '@/data/data_max'
import Slide from '@slide/Slide'
import styles from './Layout.module.css'

const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.preview}>
        <SlidePreview slides={doc.slides} />
      </div>
      <div className={styles.editor}>
        <Slide slide={doc.slides[0]} editable={true} />
      </div>
    </div>
  )
}

export default Layout
