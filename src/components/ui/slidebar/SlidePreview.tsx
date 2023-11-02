import { doc } from '@/data/data_max'
import { TSlide } from '@/types/type'
import Slide from '@slide/Slide'
import { FC } from 'react'
import styles from './SlidePreview.module.css'

type SlidePreview = {
  slides: TSlide[]
}

export const SlidePreview: FC<SlidePreview> = ({ slides = doc.slides }) => {
  const scale: number = 300 / slides[0].size.width
  return (
    <div className={styles.preview}>
      {slides.map(slide => (
        <div
          key={slide.id}
          className={styles.slidePreview}
          style={{
            scale: `${scale}`,
            width: slide.size.width * scale,
            height: slide.size.height * scale,
          }}
        >
          <Slide slide={slide}></Slide>
        </div>
      ))}
    </div>
  )
}

// style={{ transform: `scale(${300 / slide.size.width})` }}
