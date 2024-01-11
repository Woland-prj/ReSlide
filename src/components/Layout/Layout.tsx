import {
  context_menu_button_groups,
  slidebarButtonGroupNames,
  slideButtonGroupNames,
} from '@/data/context_menu_buttons.data'
import { useDoc } from '@/hooks/useDoc'
import { useEditor } from '@/hooks/useEditor'
import { useGlobalHandlers } from '@/hooks/useGlobalHandlers'
import { TButtonGroup } from '@/types/context_menu_buttons.type'
import { TCoords } from '@/types/type'
import Slide from '@slide/Slide'
import ContextMenu from '@ui/context_menu/ContextMenu'
import { SlidePreviewList } from '@ui/slidebar/SlidePreviewList'
import { FC, useEffect, useRef, useState } from 'react'
import styles from './Layout.module.css'

const Layout: FC = () => {
  const { activeSlideId } = useEditor()
  const { slides } = useDoc()
  const ref_slide = useRef<HTMLDivElement>(null)
  const ref_slidebar = useRef<HTMLDivElement>(null)
  const active_slide = slides.filter(slide => slide.id === activeSlideId)[0]
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false)
  const [isSlideBarMenuOpen, setIsSlideBarMenuOpen] = useState(false)
  const slidebarGroups: TButtonGroup[] = context_menu_button_groups.filter(
    group => group.id in slidebarButtonGroupNames,
  )
  const slideGroups: TButtonGroup[] = context_menu_button_groups.filter(
    group => group.id in slideButtonGroupNames,
  )
  const [mouseCoords, setMouseCoords] = useState<TCoords>({ x: 0, y: 0 })
  useGlobalHandlers()

  useEffect(() => {
    ref_slidebar.current?.addEventListener('contextmenu', event => {
      event.preventDefault()
      setMouseCoords({
        x: event.clientX,
        y: event.clientY,
      })
      setIsSlideBarMenuOpen(!isSlideBarMenuOpen)
      setIsSlideMenuOpen(false)
    })

    ref_slide.current?.addEventListener('contextmenu', event => {
      event.preventDefault()
      setMouseCoords({
        x: event.clientX,
        y: event.clientY,
      })
      setIsSlideMenuOpen(!isSlideMenuOpen)
      setIsSlideBarMenuOpen(false)
    })
    return () => {
      ref_slide.current?.removeEventListener('contextmenu', () => {})
      ref_slidebar.current?.removeEventListener('contextmenu', () => {})
    }
  }, [])

  return (
    <div className={styles.layout}>
      <div // Элемент, по правому клику на который, активируется ПКМ-меню на слайдбаре
        className={styles.preview}
        ref={ref_slidebar}
      >
        <SlidePreviewList />
        {isSlideBarMenuOpen && (
          <ContextMenu
            coords={mouseCoords}
            buttonGroups={slidebarGroups}
            setIsContextMenuOpen={setIsSlideBarMenuOpen}
          ></ContextMenu>
        )}
      </div>
      <div // Элемент, по правому клику на который, активируется ПКМ-меню на слайде
        className={styles.editor}
        ref={ref_slide}
      >
        <Slide slide={active_slide} editable={true} />
        {isSlideMenuOpen && (
          <ContextMenu
            coords={mouseCoords}
            buttonGroups={slideGroups}
            setIsContextMenuOpen={setIsSlideMenuOpen}
          ></ContextMenu>
        )}
      </div>
    </div>
  )
}

export default Layout
