import { doc } from '@/data/data_max'
import useDnd from '@/hooks/useDnd'
import useSelection from '@/hooks/useSelection'
import { useStyles } from '@/hooks/useStyles'
import {
  ObjectType,
  SlideBgType,
  TImage,
  TSlide,
  TText,
  TVector,
} from '@/types/type'
import Image from '@slide/image/Image'
import Vector from '@slide/shapes/Vector'
import TextField from '@slide/text/TextField'
import { FC, useEffect, useRef } from 'react'
import styles from './Slide.module.css'

type TObjectProps = {
  object: TText | TVector | TImage
  index: number
  editable: boolean
}

type TSlideProps = {
  editable: boolean
  slide: TSlide
}

const Object: FC<TObjectProps> = ({ object, index, editable }) => {
  function changeStyles(object: TText | TVector | TImage): React.CSSProperties {
    return {
      left: object.coords.x,
      top: object.coords.y,
      transform: `rotate(${object.rotationAngle}deg)`,
    }
  }

  const params = [object.coords.x, object.coords.y, object.rotationAngle]
  const chStyles = useStyles(params, object, changeStyles)
  const objRef = useRef<HTMLDivElement>(null)
  const { setSelection, deleteSelection } = useSelection(object.id)
  const { registerItemFn, unregisterItemFn } = useDnd(object.id)

  useEffect(() => {
    if (editable) {
      const dndFn = registerItemFn(index, { elementRef: objRef })
      const selectFn = setSelection(objRef)
      return () => {
        unregisterItemFn(index, dndFn)
        deleteSelection(objRef, selectFn)
      }
    }
  }, [])

  return (
    <div style={chStyles} className={styles.object} ref={objRef}>
      {(() => {
        switch (object.type) {
          case ObjectType.Text:
            return <TextField text={object} />
          case ObjectType.Image:
            return <Image image={object} />
          case ObjectType.Vector:
            return <Vector vector={object} />
          default:
            return <div>Incorrect object</div>
        }
      })()}
    </div>
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

  const params = [doc.size.width, doc.size.height]
  const chStyles = useStyles(params, slide, changeStyles)

  return (
    <div className={styles.slide} style={chStyles}>
      {slide.objects.map((object, index) => (
        <Object
          key={object.id}
          object={object}
          index={index}
          editable={editable}
        />
      ))}
    </div>
  )
}

export default Slide

// TODO: editable - Nikita
// actions_menu 1) картинки, 2) размапить
// CSS Layout
