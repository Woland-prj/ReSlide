import { TText } from '@/types/type'
import { text } from '@/data/data_max'
import { FC } from 'react'

type TTextProps = {
  _text: TText
}

const Text: FC<TTextProps> = ({ _text = text }) => {
  return <div color='_text.formatting.color'>{_text.value}</div>
}

export default Text
