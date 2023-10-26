import { TVector } from '@/types/type'
import { FC } from 'react'

type TCircleProps = {
  vector: TVector
}

const Ellipse: FC<TCircleProps> = ({ vector }) => {
  return (
    <div>
      <svg
        width={vector.size.width + vector.strokeSize}
        height={vector.size.height + vector.strokeSize}
        xmlns='http://www.w3.org/2000/svg'
        stroke={vector.strokeColor}
        fill={vector.fillColor}
      >
        <polygon points={} strokeWidth={vector.strokeSize} />
      </svg>
    </div>
  )
}

export default Ellipse
