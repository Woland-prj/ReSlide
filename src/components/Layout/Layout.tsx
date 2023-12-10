import { FC } from 'react'
import { SlidePreviewList } from '@ui/slidebar/SlidePreviewList'
import { doc } from '@/data/data_max'
import Slide from '@slide/Slide'
import styles from './Layout.module.css'
import { useEditor } from '@/hooks/useEditor'
import { useDoc } from '@/hooks/useDoc'

const Layout: FC = () => {
  const { active_slide_id } = useEditor()
  const { slides } = useDoc()

  const active_slide = slides.filter(slide => slide.id === active_slide_id)[0]

  return (
    <div className={styles.layout}>
      <div className={styles.preview}>
        <SlidePreviewList />
      </div>
      <div className={styles.editor}>
        <Slide slide={active_slide} editable={true} />
      </div>
    </div>
  )
}

export default Layout
