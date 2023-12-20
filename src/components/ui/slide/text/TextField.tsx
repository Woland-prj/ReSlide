import { TSize, TText } from '@/types/type'
import { FC, useEffect, useRef, useState } from 'react'
import { useActions } from '@/hooks/useActions'

type TTextFieldProps = {
  text: TText
}

const TextField: FC<TTextFieldProps> = ({ text }) => {
  const textParentRef = useRef<SVGSVGElement>(null)
  const [strs, setStrs] = useState<string[]>([])
  const { changeObjectSizeAction } = useActions()

  useEffect(() => {
    const charCount = Math.floor(text.size.width / text.formatting.fontSize)
    const tempStrs: string[] = []
    text.value.split('\n').forEach(str => {
      const strArr = str.split('')
      // while (strArr.length * text.formatting.fontSize < text.size.width) {
      // }
    })
  }, [text])

  useEffect(() => {
    const newSize: TSize = {
      width: text.size.width,
      height:
        strs.length * text.formatting.fontSize > text.size.height
          ? strs.length * text.formatting.fontSize
          : text.size.height,
    }
    changeObjectSizeAction(text.id, newSize)
  }, [strs.length])

  return (
    <svg ref={textParentRef} width={text.size.width} height={text.size.height}>
      <text
        y={text.size.height / 2 - (text.formatting.fontSize * strs.length) / 2}
      >
        {strs.map((str, index) => (
          <tspan key={index} x={0} dy='1rem'>
            {str}
          </tspan>
        ))}
      </text>
    </svg>
  )
}

export default TextField

// <span
// style={{
//   color: text.formatting.color,
//     width: text.size.width,
//     height: text.size.height,
//     fontSize: text.formatting.fontSize,
//     fontFamily: text.formatting.fontFamily,
// }}
// >
// {text.value}
// </span>
