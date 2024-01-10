import { ShapeVariation, TVector } from '@/types/type'
import { FC, useEffect, useRef } from 'react'
import Ellipse from './Ellipse'
import Rectangle from './Rectangle'
import Triangle from './Triangle'

type TVectorProps = {
  vector: TVector
  editable: boolean
}

const Vector: FC<TVectorProps> = ({ vector }) => {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    svgRef.current!.style.width = svgRef.current!.parentElement!.style.width
    svgRef.current!.style.height = svgRef.current!.parentElement!.style.height
  })

  return (
    <svg
      width={vector.size.width}
      height={vector.size.height}
      xmlns='http://www.w3.org/2000/svg'
      stroke={vector.strokeColor}
      fill={vector.fillColor}
      strokeWidth={vector.strokeSize}
      ref={svgRef}
    >
      {(() => {
        switch (vector.shape) {
          case ShapeVariation.Rectangle:
            return <Rectangle vector={vector} />
          case ShapeVariation.Ellipse:
            return <Ellipse vector={vector} />
          case ShapeVariation.Triangle:
            return <Triangle vector={vector} />
          default:
            return <div>Incorrect shape</div>
        }
      })()}
    </svg>
  )
}

export default Vector
