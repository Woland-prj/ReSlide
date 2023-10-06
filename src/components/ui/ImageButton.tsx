import { ButtonProps } from '@ui/ButtonProps'
import { FC } from 'react'
//TODO: Я не знаю как этому элементу дать картинку по url. Надо разобраться позже

type ImageButtonProps = ButtonProps & {
  image_url: string
}

const ImageButton: FC<ImageButtonProps> = ({ image_url, hover, onClick }) => {
  return (
    <button onClick={onClick} onMouseEnter={hover} className='ImageButton'>
      <img src={image_url} />
    </button>
  )
}

export default ImageButton
