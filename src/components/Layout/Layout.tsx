import { FC, useEffect, useRef, useState } from 'react'
import { SlidePreviewList } from '@ui/slidebar/SlidePreviewList'
import Slide from '@slide/Slide'
import styles from './Layout.module.css'
import { useEditor } from '@/hooks/useEditor'
import { useDoc } from '@/hooks/useDoc'
import ContextMenu from '@ui/context_menu/ContextMenu'
import { context_menu_button_groups } from '@/data/context_menu_buttons.data'
import { TButtonGroup } from '@/types/context_menu_buttons.type'

const Layout: FC = () => {
  const { active_slide_id } = useEditor()
  const { slides } = useDoc()
  const ref_slide = useRef<HTMLDivElement>(null)
  const ref_slidebar = useRef<HTMLDivElement>(null)
  const active_slide = slides.filter(slide => slide.id === active_slide_id)[0]
  const [menuState, setMenuState] = useState(false)

  useEffect(() => {
    ref_slidebar.current?.addEventListener('contextmenu', () => {
      console.log('ПКМ-меню у slidebar')
    })

    ref_slide.current?.addEventListener('contextmenu', e => {
      //if (!menuState) setMenuState(true)
      e.preventDefault()
      //console.log(menuState)
      // if (menuState) {
      // context_menu_button_groups.map(buttonGroup => {
      //   console.log(buttonGroup.id)
      //    buttonGroup.id == 'new_object_buttons'
      //     && (
      //     <ContextMenu buttonGroups={[buttonGroup]}></ContextMenu>
      //   )
      // })
      //console.log(menuState)
      // setMenuState(false)
      // }
    })
  }, [])

  return (
    <div className={styles.layout}>
      <div className={styles.preview} ref={ref_slidebar}>
        <SlidePreviewList />
      </div>
      <div className={styles.editor} ref={ref_slide}>
        <Slide slide={active_slide} editable={true} />
      </div>
    </div>
  )
}

export default Layout
