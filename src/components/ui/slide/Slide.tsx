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
import { FC } from 'react'
import styles from './Slide.module.css'

type TObjectProps = {
  object: TText | TVector | TImage
}

type TSlideProps = {
  editable: boolean
  slide: TSlide
}

const Object: FC<TObjectProps> = ({ object }) => {
  function changeStyles(object: TText | TVector | TImage): React.CSSProperties {
    const styles = {
      left: object.coords.x,
      top: object.coords.y,
      transform: `rotate(${object.rotationAngle}deg)`,
    }
    return styles
  }

  const params = [object.coords.x, object.coords.y, object.rotationAngle]
  const chStyles = useStyles(params, object, changeStyles)

  return (
    <div
      style={chStyles}
      className={styles.object}
      //ref={(el: HTMLDivElement) => (refItem.item = el)}
    >
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
  if (editable) {
    // TODO: сделать драгэнддроп
    console.log('useDnd')
  }

  function changeStyles(slide: TSlide): React.CSSProperties {
    const styles: React.CSSProperties = {
      width: slide.size.width,
      height: slide.size.height,
    }
    slide.background.variation == SlideBgType.Img
      ? (styles.backgroundImage = `url(${slide.background.value})`)
      : (styles.backgroundColor = slide.background.value)
    return styles
  }

  const params = [slide.size.width, slide.size.height]
  const chStyles = useStyles(params, slide, changeStyles)

  return (
    <div className={styles.slide} style={chStyles}>
      {slide.objects.map(object => (
        <Object key={object.id} object={object} />
      ))}
    </div>
  )
}

export default Slide

// TODO: editable - Nikita
// actions_menu 1) картинки, 2) размапить
// CSS Layout
