import { doc } from '@/data/data_max'
import { TSlide } from '@/types/type'
import Slide from '@slide/Slide'
import { FC } from 'react'
import styles from './SlidePreview.module.css'

type SlidePreview = {
  slides: TSlide[]
}

export const SlidePreview: FC<SlidePreview> = ({ slides = doc.slides }) => {
  const scale: number = 300 / doc.size.width
  return (
    <div className={styles.preview}>
      {slides.map(slide => (
        <div
          key={slide.id}
          className={styles.slidePreview}
          style={{
            scale: `${scale}`,
            width: doc.size.width * scale,
            height: doc.size.height * scale,
          }}
        >
          <Slide slide={slide} editable={false}></Slide>
        </div>
      ))}
    </div>
  )
}

// style={{ transform: `scale(${300 / slide.size.width})` }}
