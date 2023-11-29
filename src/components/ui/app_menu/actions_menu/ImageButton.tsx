import { TActionsButton } from '@/types/action_buttons.type'
import { FC } from 'react'

type ImageButtonProps = {
  button: TActionsButton
}

const ImageButton: FC<ImageButtonProps> = ({ button }) => {
  return (
    <button onMouseEnter={button.hover} className='ImageButton'>
      <img src={button.iconUrl} alt={button.alt} />
    </button>
  )
}

export default ImageButton
