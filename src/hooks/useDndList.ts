// import { useEffect, useRef } from 'react'

// type TDraggedItemInfo = {
//   element: HTMLDivElement
//   startY: number
// }

// const useDndList = () => {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const itemsRef = useRef<HTMLDivElement[]>([])
//   const dragItemInfoRef = useRef<TDraggedItemInfo | null>(null)
//   useEffect(() => {
//     const unsubscribes = itemsRef.current.map(itemElement => {
//       const onMouseDown = (e: MouseEvent) => {
//         dragItemInfoRef.current = {
//           element: itemElement,
//           startY: e.clientY,
//         }
//       }
//       itemElement.addEventListener('mousedown', onMouseDown)

//       const onMouseMove = (e: MouseEvent) => {
//         if (itemElement === dragItemInfoRef.current.element) {
//           itemElement.style.position = 'relative'
//           itemElement.style.top = e.clientY + 'px'
//         }
//       }
//       itemElement.addEventListener('mousemove', onMouseMove)
//     })

//     const unsubscribe = () => {}

//     return () => {
//       unsubscribes.forEach(unsubscribe => unsubscribe(unsubscribe))
//     }
//   }, [])

//   useEffect(() => {
//     const draggedItem = draggedItemRef.current
//     if (draggedItem) {
//     }
//   })

//   return { containerRef, itemsRef }
// }

// export default useDndList
