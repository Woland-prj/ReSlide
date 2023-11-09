import { useEffect, useRef } from 'react'

type TDraggedItemInfo = {
  element: HTMLDivElement
  startY: 0
}
const useDndList = () => {
  const containerRef = useRef<HTMLDivElement>(null) // Контейнер, внутри которого перемещается элемент
  const itemsRef = useRef<HTMLDivElement[]>([])
  const draggedItemRef = useRef<TDraggedItemInfo>()

  useEffect(() => {
    const unsubscribes = itemsRef.current.map(itemElement => {
      const onMouseDown = () => {
        draggedItemRef.current = itemElement
      }
      itemElement.addEventListener('mousedown', onMouseDown)
    })

    return () => {
      unsubscribes.forEach(unsubscribe => unsubscribe())
    }
  }, [])

  useEffect(() => {
    const draggedItem = draggedItemRef.current
    if (draggedItem) {
    }
  })

  return { containerRef, itemsRef }
}

export default useDndList
