import {
  context_menu_button_groups,
  slidebarButtonGroupNames,
} from '@/data/context_menu_buttons.data'
import { useDoc } from '@/hooks/useDoc'
import { useEditor } from '@/hooks/useEditor'
import { TButtonGroup } from '@/types/context_menu_buttons.type'
import Slide from '@slide/Slide'
import ContextMenu from '@ui/context_menu/ContextMenu'
import { SlidePreviewList } from '@ui/slidebar/SlidePreviewList'
import { FC, useEffect, useRef, useState } from 'react'
import styles from './Layout.module.css'

const Layout: FC = () => {
  const { active_slide_id } = useEditor()
  const { slides } = useDoc()
  const ref_slide = useRef<HTMLDivElement>(null)
  const ref_slidebar = useRef<HTMLDivElement>(null)
  const active_slide = slides.filter(slide => slide.id === active_slide_id)[0]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // slideGroups_undefined и slidebarGroups_undefined - массивы с группами кнопок. Undefined у них появляется из-за map.
  // Чтобы компилятор не выдавал ошибок, цикл for переводит массив с возможным undefined в нормальный массив
  const slidebarGroups = context_menu_button_groups
    .map(group => {
      if (group!.id in slidebarButtonGroupNames) return group
    })
    .filter(group => group != undefined)
  const slideGroups: TButtonGroup[] = context_menu_button_groups.filter(
    group => group.id in slidebarButtonGroupNames,
  )

  useEffect(() => {
    ref_slidebar.current?.addEventListener('contextmenu', () => {
      console.log('ПКМ-меню у slidebar')
    })

    ref_slide.current?.addEventListener('contextmenu', e => {
      e.preventDefault()
      if (isMenuOpen) {
        setIsMenuOpen(false)
      } else {
        setIsMenuOpen(true)
      }
    })
  }, [])

  return (
    <div className={styles.layout}>
      <div className={styles.preview} ref={ref_slidebar}>
        <SlidePreviewList />
      </div>
      <div className={styles.editor} ref={ref_slide}>
        <Slide slide={active_slide} editable={true} />
        {isMenuOpen && <ContextMenu buttonGroups={slideGroups}></ContextMenu>}
      </div>
    </div>
  )
}

export default Layout
