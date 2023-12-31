import { doc } from '@/data/data_max'
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
import { FC, RefObject, useRef } from 'react'
import styles from './Slide.module.css'
import SelectionBox from './selection_box/SelectionBox'

type TObjectProps = {
  object: TText | TVector | TImage
  editable: boolean
  slideRef: RefObject<HTMLDivElement>
}

type TSlideProps = {
  editable: boolean
  slide: TSlide
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

  const params = [doc.size.width, doc.size.height]
  const chStyles = useStyles(params, slide, changeStyles)
  const slRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.slide} style={chStyles} ref={slRef}>
      {slide.objects.map(object => (
        <Object
          key={object.id}
          object={object}
          slideRef={slRef}
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
