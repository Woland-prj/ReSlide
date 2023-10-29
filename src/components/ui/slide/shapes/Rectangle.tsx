import { TVector } from '@/types/type'
import { FC } from 'react'

type TRectangleProps = {
  vector: TVector
}

const Rectangle: FC<TRectangleProps> = ({ vector }) => {
  return (
    <div>
      <svg
        width={vector.size.width + vector.strokeSize}
        height={vector.size.height + vector.strokeSize}
        xmlns='http://www.w3.org/2000/svg'
        stroke={vector.strokeColor}
        fill={vector.fillColor}
      >
        <rect
          x={vector.strokeSize / 2}
          y={vector.strokeSize / 2}
          width={vector.size.width}
          height={vector.size.height}
          strokeWidth={vector.strokeSize}
        />
      </svg>
    </div>
  )
}

export default Rectangle