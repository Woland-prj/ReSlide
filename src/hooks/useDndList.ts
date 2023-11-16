<<<<<<< HEAD
// import { useEffect, useRef } from 'react'
// import { isElement } from 'react-dom/test-utils'
//
// type TDraggedItemInfo = {
//   element: HTMLDivElement
//   startY: number
// }
//
// type TSubscription = {
//   element: HTMLDivElement
//   subscribers: ((e: MouseEvent) => void)[]
// }
//
// const useDndList = () => {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const itemsRef = useRef<HTMLDivElement[]>([])
//   const dragItemInfoRef = useRef<TDraggedItemInfo | null>(null)
//   useEffect(() => {
//     //const exItems: HTMLDivElement[] = itemsRef.current.filter(item => item != null)
//     const unsubscribes: TSubscription[] = itemsRef.current.map(itemElement => {
//       const onMouseDown = (e: MouseEvent) => {
//         dragItemInfoRef.current = {
//           element: itemElement,
//           startY: e.clientY,
//         }
//       }
//       itemElement.addEventListener('mousedown', onMouseDown)
//
//       const onMouseMove = (e: MouseEvent) => {
//         if (itemElement === dragItemInfoRef.current?.element) {
//           itemElement.style.position = 'relative'
//           itemElement.style.top = e.clientY + 'px'
//         }
//       }
//       itemElement.addEventListener('mousemove', onMouseMove)
//
//       const onMouseUp = (e: MouseEvent) => {
//         if (itemElement === dragItemInfoRef.current?.element)
//           dragItemInfoRef.current = null
//       }
//       itemElement.addEventListener('mouseup', onMouseUp)
//       return {
//         element: itemElement,
//         subscribers: [onMouseDown, onMouseMove, onMouseUp],
//       }
//     })
//
//     const unsubscribe = (action: TSubscription) => {
//       action.element.removeEventListener('mousedown', action.subscribers[0])
//       action.element.removeEventListener('mousemove', action.subscribers[1])
//       action.element.removeEventListener('mouseup', action.subscribers[2])
//     }
//
//     return () => {
//       unsubscribes.forEach(action => unsubscribe(action))
//     }
//   }, [])
//
//   return { containerRef, itemsRef }
// }
//
// export default useDndList
=======
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
>>>>>>> Denis
