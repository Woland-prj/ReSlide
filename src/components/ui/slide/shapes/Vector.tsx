import { ShapeVariation, TVector } from '@/types/type'
import { FC } from 'react'
import Ellipse from './Ellipse'
import Rectangle from './Rectangle'
import Triangle from './Triangle'

type TVectorProps = {
  vector: TVector
  editable: boolean
}

const Vector: FC<TVectorProps> = ({ vector }) => {
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
}

export default Vector
