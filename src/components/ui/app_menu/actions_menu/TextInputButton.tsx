import { FC } from 'react'

type TextInputButtonProps = {
  type: string
  placeholder: string
  submitValue: string
}

export const TextInputButton: FC<TextInputButtonProps> = ({
  type,
  placeholder,
  submitValue,
}) => {
  return (
    <div>
      <form name='publish'>
        <input type={type} name='message' placeholder={placeholder} />
        <input type='submit' value={submitValue} />
      </form>
    </div>
  )
}
