import { FC } from 'react'
import { TImage } from '@/types/type'
type TImageProps = {
  image: TImage
}

const Image: FC<TImageProps> = ({ image }) => {
  return <img ref={image.link} width={image.size.width} />
}
