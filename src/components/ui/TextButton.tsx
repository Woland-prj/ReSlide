import { FC } from 'react'
import { ButtonProps } from '@ui/ButtonProps'

type TextButtonProps = ButtonProps & {
  text: string
}
const TextButton: FC<TextButtonProps> = ({ text, hover, onClick }) => {
  return (
    <button onClick={onClick} onMouseEnter={hover} className='TextButton'>
      {text}
    </button>
  )
}

export default TextButton
