import { TVector } from '@/types/type'
import { FC } from 'react'

type TCircleProps = {
  vector: TVector
}

const Triangle: FC<TCircleProps> = ({ vector }) => {
  const points: string =
    vector.strokeSize +
    ', ' +
    (vector.size.height - vector.strokeSize / 2) +
    ' ' +
    vector.size.width / 2 +
    ',' +
    vector.strokeSize / 2 +
    ', ' +
    (vector.size.width - vector.strokeSize) +
    ',' +
    (vector.size.height - vector.strokeSize / 2)
  return (
    <svg
      width={vector.size.width}
      height={vector.size.height}
      xmlns='http://www.w3.org/2000/svg'
      stroke={vector.strokeColor}
      fill={vector.fillColor}
      strokeWidth={vector.strokeSize}
    >
      <polygon points={points} />
    </svg>
  )
}

export default Triangle
