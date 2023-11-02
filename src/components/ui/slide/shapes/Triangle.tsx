import { TVector } from '@/types/type'
import { FC } from 'react'

type TCircleProps = {
  vector: TVector
}

const Triangle: FC<TCircleProps> = ({ vector }) => {
  const points: string =
    '0,' +
    vector.size.height +
    ' ' +
    vector.size.width / 2 +
    ',0 ' +
    vector.size.width +
    ',' +
    vector.size.height
  return (
    <div
      contentEditable='true'
      // добавлено после вырезания TText
      style={{
        fontFamily: vector.formatting.fontFamily,
        fontSize: vector.formatting.fontSize,
        fontStyle: vector.formatting.variation.italic,
        textDecoration: vector.formatting.variation.decorationLine,
        color: vector.formatting.color,
      }}
    >
      <svg
        width={vector.size.width + vector.strokeSize}
        height={vector.size.height + vector.strokeSize}
        xmlns='http://www.w3.org/2000/svg'
        stroke={vector.strokeColor}
        fill={vector.fillColor}
        strokeWidth={vector.strokeSize}
      >
        <polygon points={points} />
      </svg>
    </div>
  )
}

export default Triangle
