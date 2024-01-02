import { TImage } from '@/types/type'
import { FC } from 'react'
import styles from './Image.module.css'

type TImageProps = {
  image: TImage
  editable: boolean
}

const Image: FC<TImageProps> = ({ image }) => {
  return (
    <img
      className={styles.img_box}
      src={image.data}
      width={image.size.width}
      height={image.size.height}
      alt={image.name}
      draggable='false'
    />
  )
}

export default Image
