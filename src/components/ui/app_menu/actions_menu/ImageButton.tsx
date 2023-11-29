import { ButtonProps } from '@ui/app_menu/actions_menu/ButtonProps'
import { FC } from 'react'

type ImageButtonProps = ButtonProps & {
  image_url: string
  alt: string
}

const ImageButton: FC<ImageButtonProps> = ({
  image_url,
  alt,
  hover,
  onClick,
}) => {
  return (
    <button onClick={onClick} onMouseEnter={hover} className='ImageButton'>
      <img src={image_url} alt={alt} />
    </button>
  )
}

export default ImageButton
