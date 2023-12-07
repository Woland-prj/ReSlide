import { doc } from '@/data/data_max'
import { TSlide } from '@/types/type'
import Slide from '@slide/Slide'
import { FC, useEffect, useRef } from 'react'
import styles from './SlidePreview.module.css'
import { useDoc } from '@/hooks/useDoc'
import cn from 'clsx'

type SlidePreview = {
  slides: TSlide[]
}

export const SlidePreview: FC<SlidePreview> = () => {
  const { slides, size } = useDoc()
  // const previewRef = useRef<HTMLDivElement>(null)

  const scale: number = 200 / size.width
  return (
    <div className={styles.preview}>
      {slides.map((slide, index) => (
        <div className={styles.preview_wrapper} key={slide.id}>
          <span>{index + 1}</span>
          <div
            className={cn(
              styles.slidePreview,
              slide.isSelected && styles.slidePreview_active,
            )}
            style={{
              scale: `${scale}`,
              height: size.height * scale,
              width: size.width * scale,
            }}
          >
            <Slide slide={slide} editable={false}></Slide>
          </div>
        </div>
      ))}
    </div>
  )
}

// style={{ transform: `scale(${300 / slide.size.width})` }}
