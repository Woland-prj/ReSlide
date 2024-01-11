import { TVector } from '@/types/type'
import { FC, useRef } from 'react'

type TCircleProps = {
  vector: TVector
}

const Ellipse: FC<TCircleProps> = ({ vector }) => {
  const elRef = useRef<SVGEllipseElement>(null)

  // useEffect(() => {
  //   const size: TSize = {
  //     width: parseFloat(elRef.current!.parentElement!.style.width),
  //     height: parseFloat(elRef.current!.parentElement!.style.height),
  //   }
  //   if (size.width && size.height) {
  //     elRef.current!.setAttribute('cx', `${size.width / 2}`)
  //     elRef.current!.setAttribute('cy', `${size.height / 2}`)
  //     elRef.current!.setAttribute(
  //       'rx',
  //       `${size.width / 2 - vector.strokeSize / 2}`,
  //     )
  //     elRef.current!.setAttribute(
  //       'ry',
  //       `${size.height / 2 - vector.strokeSize / 2}`,
  //     )
  //   }
  // }, [
  //   elRef.current?.parentElement?.style.width,
  //   elRef.current?.parentElement?.style.height,
  // ])

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
