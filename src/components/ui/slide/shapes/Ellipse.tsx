import { TVector } from '@/types/type'
import { FC, useRef } from 'react'

type TCircleProps = {
  vector: TVector
}

const Ellipse: FC<TCircleProps> = ({ vector }) => {
  const elRef = useRef<SVGEllipseElement>(null)
  return (
    <ellipse
      cx={vector.size.width / 2}
      cy={vector.size.height / 2}
      rx={vector.size.width / 2 - vector.strokeSize / 2}
      ry={vector.size.height / 2 - vector.strokeSize / 2}
      strokeWidth={vector.strokeSize}
      ref={elRef}
    />
  )
}

export default Ellipse
