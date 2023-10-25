import { TVector } from '@/types/type'
import { FC, useEffect, useRef } from 'react'

type TVectorProps = {
  vector: TVector
}

const Vector: FC<TVectorProps> = ({ vector }) => {
  const shapeRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    shapeRef.current?.classList.add(vector.shape)
  }, [])
  return <div ref={shapeRef}></div>
}

export default Vector
