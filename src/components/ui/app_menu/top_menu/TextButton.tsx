import { ButtonProps } from '@ui/app_menu/top_menu/ButtonProps'
import { FC } from 'react'

type TextButtonProps = ButtonProps & {
  text: string
}
const TextButton: FC<TextButtonProps> = ({ text, onHover, onClick }) => {
  return (
    <button onClick={onClick} onMouseEnter={onHover} className='TextButton'>
      {text}
    </button>
  )
}

export default TextButton
