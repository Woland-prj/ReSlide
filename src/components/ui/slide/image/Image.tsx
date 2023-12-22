import { TImage } from '@/types/type'
import { FC } from 'react'

type TImageProps = {
  image: TImage
  editable: boolean
}

const Image: FC<TImageProps> = ({ image }) => {
  return (
    <img src={image.link} width={image.size.width} height={image.size.height} />
  )
}

export default Image
