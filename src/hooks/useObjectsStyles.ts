import { ObjectType, TImage, TText, TVector } from '@/types/type'
import { useCallback } from 'react'
import { useStyles } from './useStyles'

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
      const params: unknown[] = [...baseParams, object.formatting]
      const styleFn = useCallback(
        (object: TText): React.CSSProperties => {
          return {
            ...baseStyles,
            color: object.formatting.color,
            fontSize: object.formatting.fontSize,
            fontFamily: object.formatting.fontFamily,
          }
        },
        [...params],
      )
      return useStyles<TText>(params, object, styleFn)
    }
    case ObjectType.Vector: {
      const params: unknown[] = [...baseParams]
      const styleFn = useCallback(
        (object: TVector): React.CSSProperties => {
          return {
            ...baseStyles,
          }
        },
        [...params],
      )
      return useStyles<TVector>(params, object, styleFn)
    }
    case ObjectType.Image: {
      const params: unknown[] = [...baseParams]
      const styleFn = useCallback(
        (object: TImage): React.CSSProperties => {
          return {
            ...baseStyles,
          }
        },
        [...params],
      )
      return useStyles<TImage>(params, object, styleFn)
    }
  }
}
