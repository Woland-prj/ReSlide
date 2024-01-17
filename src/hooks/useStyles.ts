import { useLayoutEffect, useState } from 'react'

// Позволяет динамически изменять стили объекта в соответствии с заданной функцией changeStyles при изменении одной из переменных в массиве params

export const useStyles = <T>(
  params: Array<unknown>,
  obj: T,
  changeStyles: (obj: T) => React.CSSProperties,
) => {
  const [styles, setStyles] = useState<React.CSSProperties>()
  useLayoutEffect(() => {
    setStyles(changeStyles(obj))
  }, [...params])
  return styles
}
