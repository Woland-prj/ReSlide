import { FC } from 'react'

type ColorInputButtonProps = {
  submitValue: string
  id: string
}

export const ColorInputButton: FC<ColorInputButtonProps> = ({
  submitValue,
  id,
}) => {
  // let buttonRef = useRef<HTMLInputElement>(null)
  // buttonRef = useButtonAction(id)
  return (
    <div>
      <form name='publish'>
        <input type='color' name='message' />
        <input type='submit' value={submitValue} />
      </form>
    </div>
  )
}
