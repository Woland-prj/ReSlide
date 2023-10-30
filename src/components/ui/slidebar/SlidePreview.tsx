import { doc } from '@/data/data_max'
import { TSlide } from '@/types/type'
import Slide from '@slide/Slide'
import { FC } from 'react'
import styles from './SlidePreview.module.css'

type SlidePreview = {
  slides: TSlide[]
}

export const SlidePreview: FC<SlidePreview> = ({ slides = doc.slides }) => {
  return (
    <div className={styles.preview}>
      {slides.map(slide => (
        <Slide key={slide.id} slide={slide}></Slide>
      ))}
    </div>
  )
}
