import Slide from '@slide/Slide'
import { FC, useEffect } from 'react'
import styles from './SlidePreview.module.css'
import { useDoc } from '@/hooks/useDoc'
import cn from 'clsx'

export const SlidePreview: FC = () => {
  const { slides, size } = useDoc()
  useEffect(() => {
    console.log('reload')
  }, [slides])

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
