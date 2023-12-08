import { TText } from '@/types/type'
import { FC } from 'react'

type TTextFieldProps = {
  text: TText
}

const TextField: FC<TTextFieldProps> = ({ text }) => {
  return (
    <div>
      <span
        style={{
          color: text.formatting.color,
          width: text.size.width,
          height: text.size.height,
          fontSize: text.formatting.fontSize,
          fontFamily: text.formatting.fontFamily,
        }}
      >
        {text.value}
      </span>
    </div>
  )
}

export default TextField
