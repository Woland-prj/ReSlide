import { TVector } from '@/types/type'
import { FC } from 'react'

type TRectangleProps = {
  vector: TVector
}

const Rectangle: FC<TRectangleProps> = ({ vector }) => {
  return (
    <rect
      x={vector.strokeSize / 2}
      y={vector.strokeSize / 2}
      width={vector.size.width - vector.strokeSize}
      height={vector.size.height - vector.strokeSize}
      strokeWidth={vector.strokeSize}
    />
  )
}

export default Rectangle
