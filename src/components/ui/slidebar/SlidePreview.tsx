import { FC, useEffect, useRef } from 'react'
import styles from '@ui/slidebar/SlidePreview.module.css'
import cn from 'clsx'
import Slide from '@slide/Slide'
import { useDoc } from '@/hooks/useDoc'
import { TSlide } from '@/types/type'
import { useActions } from '@/hooks/useActions'
import { useEditor } from '@/hooks/useEditor'

type TSlidePreviewProps = {
  slide: TSlide
  index: number
}

const SlidePreview: FC<TSlidePreviewProps> = ({ slide, index }) => {
  const previewRef = useRef<HTMLDivElement>(null)
  const { size } = useDoc()
  const { active_slide_id } = useEditor()
  const { setActiveSlideAction } = useActions()
  const scale: number = 200 / size.width
  useEffect(() => {
    const toggleFn = () => {
      setActiveSlideAction(slide.id)
    }
    previewRef.current?.addEventListener('click', toggleFn)
    return () => previewRef.current?.removeEventListener('click', toggleFn)
  }, [])

  return (
    <div className={styles.preview_wrapper}>
      <span>{index + 1}</span>
      <div
        className={cn(
          styles.slidePreview,
          slide.id === active_slide_id && styles.slidePreview_active,
        )}
        style={{
          scale: `${scale}`,
          height: size.height * scale,
          width: size.width * scale,
        }}
        ref={previewRef}
      >
        <Slide slide={slide} editable={false}></Slide>
      </div>
    </div>
  )
}

export default SlidePreview
