import Slide from '@/components/ui/slide/Slide'
import { useActions } from '@/hooks/useActions'
import { useDoc } from '@/hooks/useDoc'
import { useEditor } from '@/hooks/useEditor'
import { AppMode } from '@/types/type'
import { FC, useEffect, useRef, useState } from 'react'
import styles from './SlideShow.module.css'

const cursorTimeout: number = 4000

const SlideShow: FC = () => {
  const { setAppModeAction } = useActions()
  const resizeRef = useRef<HTMLDivElement>(null)
  const { size, slides, name } = useDoc()
  const { activeSlideId } = useEditor()
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)
  const timerRef = useRef<number | null>(null)
  const getSLideIndexById = (): number => {
    let strtIndex = 0
    slides.forEach((slide, index) => {
      if (slide.id === activeSlideId) strtIndex = index
    })
    return strtIndex
  }
  useEffect(() => {
    document.title = name + ' - ReSlide slideshow'
    document.documentElement.requestFullscreen()
    setActiveSlideIndex(getSLideIndexById())
    const setSlideScaleHandler = () => {
      resizeRef.current!.style.transform = `scale(${
        window.innerHeight / size.height
      })`
    }
    setSlideScaleHandler()
    window.addEventListener('resize', setSlideScaleHandler)
    const closeViewHandler = () => {
      setAppModeAction(AppMode.EDIT_MODE)
    }
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft')
        setActiveSlideIndex(prev => (prev > 0 ? prev - 1 : prev))
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ')
        setActiveSlideIndex(prev =>
          prev < slides.length - 1 ? prev + 1 : prev,
        )
    }
    const clickHandler = () => {
      setActiveSlideIndex(prev => (prev < slides.length - 1 ? prev + 1 : prev))
    }
    const moveHandler = () => {
      resizeRef.current!.style.cursor = 'default'
      if (!timerRef.current) timerRef.current = Date.now()

      setTimeout(() => {
        if (
          resizeRef.current &&
          timerRef.current &&
          Date.now() - timerRef.current >= cursorTimeout
        ) {
          resizeRef.current.style.cursor = 'none'
          timerRef.current = null
        }
      }, cursorTimeout)
    }
    setTimeout(() => {
      addEventListener('fullscreenchange', closeViewHandler)
      addEventListener('keydown', keydownHandler)
      resizeRef.current?.addEventListener('click', clickHandler)
      addEventListener('mousemove', moveHandler)
    }, 100)
    return () => {
      window.removeEventListener('resize', setSlideScaleHandler)
      removeEventListener('fullscreenchange', closeViewHandler)
      removeEventListener('keydown', keydownHandler)
      resizeRef.current?.removeEventListener('click', clickHandler)
      removeEventListener('mousemove', moveHandler)
    }
  }, [])
  return (
    <div className={styles.slide_wrapper}>
      <div ref={resizeRef}>
        <Slide editable={false} slide={slides[activeSlideIndex]} />
      </div>
    </div>
  )
}

export default SlideShow
