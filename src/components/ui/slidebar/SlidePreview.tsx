import { doc } from '@/data/data_max'
import { TSlide } from '@/types/type'
import Slide from '@slide/Slide'
import { FC, useEffect, useRef } from 'react'
import styles from './SlidePreview.module.css'
import { useDoc } from '@/hooks/useDoc'

type SlidePreview = {
  slides: TSlide[]
}

export const SlidePreview: FC<SlidePreview> = () => {
  const { slides, size } = useDoc()
  // const previewRef = useRef<HTMLDivElement>(null)

  const scale: number = 200 / size.width
  return (
    <div className={styles.preview}>
      {slides.map(slide => (
        <div
          key={slide.id}
          className={styles.slidePreview}
          style={{
            scale: `${scale}`,
            height: size.height * scale,
            width: size.width * scale,
          }}
        >
          <Slide slide={slide} editable={false}></Slide>
        </div>
      ))}
    </div>
  )
}

// style={{ transform: `scale(${300 / slide.size.width})` }}
