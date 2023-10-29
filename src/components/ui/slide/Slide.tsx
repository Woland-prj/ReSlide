import { ObjectType, TImage, TSlide, TText, TVector } from '@/types/type'
import Image from '@slide/image/Image'
import Vector from '@slide/shapes/Vector'
import TextField from '@slide/text/TextField'
import { FC } from 'react'
import styles from './Slide.module.css'

type TObjectProps = {
  object: TText | TVector | TImage
}

type TSlideProps = {
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

  return (
    <div style={changeStyles(object)} className={styles.object}>
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

const Slide: FC<TSlideProps> = ({ slide }) => {
  return (
    <div
      className={styles.slide}
      style={{ backgroundColor: slide.background.value }}
    >
      {slide.objects.map(object => (
        <Object key={object.id} object={object} />
      ))}
    </div>
  )
}

export default Slide
