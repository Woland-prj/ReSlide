import { FC } from 'react'
import styles from './SlidePreview.module.css'
import { useDoc } from '@/hooks/useDoc'
import SlidePreview from './SlidePreview'

export const SlidePreviewList: FC = () => {
  const { slides } = useDoc()

  return (
    <div className={styles.preview}>
      {slides.map((slide, index) => (
        <SlidePreview slide={slide} index={index} key={slide.id} />
      ))}
    </div>
  )
}

// style={{ transform: `scale(${300 / slide.size.width})` }}
