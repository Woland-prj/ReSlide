import { ButtonProps } from '@ui/app_menu/top_menu/ButtonProps'
import { FC } from 'react'
//TODO: Я не знаю как этому элементу дать картинку по url. Надо разобраться позже

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
