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
  return <polygon points={points} />
}

export default Triangle
