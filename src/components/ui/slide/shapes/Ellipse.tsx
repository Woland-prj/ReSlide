import { TVector } from '@/types/type'
import { FC } from 'react'

type TCircleProps = {
  vector: TVector
}

const Ellipse: FC<TCircleProps> = ({ vector }) => {
  return (
    <svg
      width={vector.size.width + vector.strokeSize}
      height={vector.size.height + vector.strokeSize}
      xmlns='http://www.w3.org/2000/svg'
      stroke={vector.strokeColor}
      fill={vector.fillColor}
    >
      <ellipse
        cx={(vector.size.width + vector.strokeSize) / 2}
        cy={(vector.size.height + vector.strokeSize) / 2}
        rx={vector.size.width / 2}
        ry={vector.size.height / 2}
        strokeWidth={vector.strokeSize}
      />
    </svg>
  )
}

export default Ellipse
