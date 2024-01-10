import { doc } from '@/data/data_max'
import { useStyles } from '@/hooks/useStyles'
import {
  ObjectType,
  SlideBgType,
  TImage,
  TSlide,
  TText,
  TVector,
  TCoords,
} from '@/types/type'
import Image from '@slide/image/Image'
import Vector from '@slide/shapes/Vector'
import TextField from '@slide/text/TextField'
import { FC, RefObject, useEffect, useRef, useState } from 'react'
import styles from './Slide.module.css'
import SelectionBox from './selection_box/SelectionBox'
import ContextMenu from '@ui/context_menu/ContextMenu'
import { TButtonGroup } from '@/types/context_menu_buttons.type'
import {
  context_menu_button_groups,
  slideButtonGroupNames,
  textButtonGroupNames,
  imageButtonGroupNames,
  vectorButtonGroupNames,
} from '@/data/context_menu_buttons.data'

type TObjectProps = {
  object: TText | TVector | TImage
  editable: boolean
  slideRef: RefObject<HTMLDivElement>
}

type TSlideProps = {
  editable: boolean
  slide: TSlide
}

const objectButtonGroups: TButtonGroup[] = context_menu_button_groups.filter(
  group => group.id in slideButtonGroupNames,
)

const makeButtonGroupWithObjectType = (
  objectType: ObjectType,
): TButtonGroup[] => {
  if (objectType == ObjectType.Text) {
    return context_menu_button_groups.filter(
      group => group.id in textButtonGroupNames || slideButtonGroupNames,
    )
  } else if (objectType == ObjectType.Image) {
    return context_menu_button_groups.filter(
      group => group.id in imageButtonGroupNames || slideButtonGroupNames,
    )
  } else {
    return context_menu_button_groups.filter(
      group => group.id in imageButtonGroupNames || slideButtonGroupNames,
    )
  }
}

const Object: FC<TObjectProps> = ({ object, editable }) => {
  return (
    <SelectionBox editable={editable} obj={object}>
      {(() => {
        switch (object.type) {
          case ObjectType.Text:
            return <TextField text={object} />
          case ObjectType.Image:
            return <Image image={object} editable={editable} />
          case ObjectType.Vector:
            return <Vector vector={object} editable={editable} />
          default:
            return <div>Incorrect object</div>
        }
      })()}
    </SelectionBox>
  )
}

const Slide: FC<TSlideProps> = ({ slide, editable }) => {
  function changeStyles(slide: TSlide): React.CSSProperties {
    const styles: React.CSSProperties = {
      width: doc.size.width,
      height: doc.size.height,
    }
    slide.background.variation == SlideBgType.Img
      ? (styles.backgroundImage = `url(${slide.background.value})`)
      : (styles.backgroundColor = slide.background.value)
    return styles
  }

  const [isObjectMenuOpen, setIsObjectMenuOpen] = useState(false)
  const params = [doc.size.width, doc.size.height]
  const chStyles = useStyles(params, slide, changeStyles)
  const slRef = useRef<HTMLDivElement>(null)
  const [mouseCoords, setMouseCoords] = useState<TCoords>({ x: 0, y: 0 })

  useEffect(() => {
    slRef.current?.addEventListener('contextmenu', event => {
      event.preventDefault()
      setMouseCoords({
        x: event.clientX,
        y: event.clientY,
      })
      if (isObjectMenuOpen) {
        setIsObjectMenuOpen(false)
      } else {
        setIsObjectMenuOpen(true)
      }
    })
    return () => {
      slRef.current?.removeEventListener
    }
  })

  return (
    <div className={styles.slide} style={chStyles} ref={slRef}>
      {slide.objects.map(object => (
        <>
          <Object
            key={object.id}
            object={object}
            slideRef={slRef}
            editable={editable}
          />
          {object.isSelected && isObjectMenuOpen && (
            <ContextMenu
              coords={mouseCoords}
              buttonGroups={makeButtonGroupWithObjectType(object.type)}
              setIsContextMenuOpen={setIsObjectMenuOpen}
            ></ContextMenu>
          )}
        </>
      ))}
    </div>
  )
}

export default Slide

// TODO: editable - Nikita
// actions_menu 1) картинки, 2) размапить
// CSS Layout
