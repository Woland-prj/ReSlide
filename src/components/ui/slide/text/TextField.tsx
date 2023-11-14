import { TText } from '@/types/type'
import { FC } from 'react'

type TTextFieldProps = {
  text: TText
}

const TextField: FC<TTextFieldProps> = ({ text }) => {
  return (
    <input
      style={{
        color: text.formatting.color,
        width: text.size.width,
        height: text.size.height,
        fontSize: text.formatting.fontSize,
        fontFamily: text.formatting.fontFamily,
      }}
      value={text.value}
    />
  )
}

export default TextField
