import { ObjectType, TImage, TText, TVector } from '@/types/type'
import { useStyles } from './useStyles'

// export type TObjectStyle = {
//   styleFn:
//     | ((object: TText) => React.CSSProperties)
//     | ((object: TVector) => React.CSSProperties)
//     | ((object: TImage) => React.CSSProperties)
//   params: unknown[]
// }

export const useObjectsStyles = (
  object: TText | TImage | TVector,
): React.CSSProperties | undefined => {
  const baseParams = [object.coords, object.rotationAngle, object.size]
  const baseStyles: React.CSSProperties = {
    left: object.coords.x,
    top: object.coords.y,
    transform: `rotate(${object.rotationAngle}deg)`,
    width: object.size.width,
    height: object.size.height,
  }
  switch (object.type) {
    case ObjectType.Text: {
      const styleFn = (object: TText): React.CSSProperties => {
        return {
          ...baseStyles,
          color: object.formatting.color,
          fontSize: object.formatting.fontSize,
          fontFamily: object.formatting.fontFamily,
        }
      }
      const params: unknown[] = [...baseParams, object.formatting]
      return useStyles<TText>(params, object, styleFn)
    }
    case ObjectType.Vector: {
      const styleFn = (object: TVector): React.CSSProperties => {
        return {
          ...baseStyles,
        }
      }
      const params: unknown[] = [...baseParams]
      return useStyles<TVector>(params, object, styleFn)
    }
    case ObjectType.Image: {
      const styleFn = (object: TImage): React.CSSProperties => {
        return {
          ...baseStyles,
        }
      }
      const params: unknown[] = [...baseParams]
      return useStyles<TImage>(params, object, styleFn)
    }
  }
}
