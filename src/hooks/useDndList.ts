import { useEffect, useRef } from 'react'

const useDndList = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])
  const draggedItemRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const unsubscribes = itemsRef.current.map(itemElement => {
      const onMouseDawn = () => {
        draggedItemRef.current = itemElement
      }
      itemElement.addEventListener('mousedown', onMouseDawn)
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
