import { ResizeTypes, TResizeDot } from '@/types/resize.type'
import { TCoords, TSize } from '@/types/type'
import { RefObject } from 'react'

export const resizeBlockData: TResizeDot[] = [
  {
    type: ResizeTypes.TOP_LEFT,
    handler: (
      dragEvt: MouseEvent,
      mouseDownEvt: MouseEvent,
      objRef: RefObject<HTMLDivElement>,
      startCoords: TCoords,
      parentCoords: TCoords,
      startSize: TSize,
    ) => {
      const itemSt = objRef.current!.style
      itemSt.width = startSize.width + startCoords.x - dragEvt.clientX + 'px'
      itemSt.height = startSize.height + startCoords.y - dragEvt.clientY + 'px'
      itemSt.left =
        dragEvt.clientX +
        startCoords.x -
        parentCoords.x -
        mouseDownEvt.clientX +
        'px'
      itemSt.top =
        dragEvt.clientY +
        startCoords.y -
        parentCoords.y -
        mouseDownEvt.clientY +
        'px'
    },
    style: {
      cursor: 'nw-resize',
    },
  },
  {
    type: ResizeTypes.TOP_RIGHT,
    handler: (
      dragEvt: MouseEvent,
      mouseDownEvt: MouseEvent,
      objRef: RefObject<HTMLDivElement>,
      startCoords: TCoords,
      parentCoords: TCoords,
      startSize: TSize,
    ) => {
      const itemSt = objRef.current!.style
      itemSt.width = dragEvt.clientX - startCoords.x + 'px'
      itemSt.height = startSize.height + startCoords.y - dragEvt.clientY + 'px'
      itemSt.top =
        dragEvt.clientY +
        startCoords.y -
        parentCoords.y -
        mouseDownEvt.clientY +
        'px'
    },
    style: {
      cursor: 'ne-resize',
    },
  },
  {
    type: ResizeTypes.BOTTOM_LEFT,
    handler: (
      dragEvt: MouseEvent,
      mouseDownEvt: MouseEvent,
      objRef: RefObject<HTMLDivElement>,
      startCoords: TCoords,
      parentCoords: TCoords,
      startSize: TSize,
    ) => {
      const itemSt = objRef.current!.style
      itemSt.width = startSize.width + startCoords.x - dragEvt.clientX + 'px'
      itemSt.height = dragEvt.clientY - startCoords.y + 'px'
      itemSt.left =
        dragEvt.clientX +
        startCoords.x -
        parentCoords.x -
        mouseDownEvt.clientX +
        'px'
    },
    style: {
      cursor: 'sw-resize',
    },
  },
  {
    type: ResizeTypes.BOTTOM_RIGHT,
    handler: (
      dragEvt: MouseEvent,
      mouseDownEvt: MouseEvent,
      objRef: RefObject<HTMLDivElement>,
      startCoords: TCoords,
    ) => {
      const itemSt = objRef.current!.style
      itemSt.width = dragEvt.clientX - startCoords.x + 'px'
      itemSt.height = dragEvt.clientY - startCoords.y + 'px'
    },
    style: {
      cursor: 'se-resize',
    },
  },
  {
    type: ResizeTypes.MIDDLE_LEFT,
    handler: (
      dragEvt: MouseEvent,
      mouseDownEvt: MouseEvent,
      objRef: RefObject<HTMLDivElement>,
      startCoords: TCoords,
      parentCoords: TCoords,
      startSize: TSize,
    ) => {
      const itemSt = objRef.current!.style
      itemSt.width = startSize.width + startCoords.x - dragEvt.clientX + 'px'
      itemSt.left =
        dragEvt.clientX +
        startCoords.x -
        parentCoords.x -
        mouseDownEvt.clientX +
        'px'
    },
    style: {
      cursor: 'w-resize',
    },
  },
  {
    type: ResizeTypes.MIDDLE_RIGHT,
    handler: (
      dragEvt: MouseEvent,
      mouseDownEvt: MouseEvent,
      objRef: RefObject<HTMLDivElement>,
      startCoords: TCoords,
    ) => {
      const itemSt = objRef.current!.style
      itemSt.width = dragEvt.clientX - startCoords.x + 'px'
    },
    style: {
      cursor: 'e-resize',
    },
  },
  {
    type: ResizeTypes.MIDDLE_TOP,
    handler: (
      dragEvt: MouseEvent,
      mouseDownEvt: MouseEvent,
      objRef: RefObject<HTMLDivElement>,
      startCoords: TCoords,
      parentCoords: TCoords,
      startSize: TSize,
    ) => {
      const itemSt = objRef.current!.style
      itemSt.height = startSize.height + startCoords.y - dragEvt.clientY + 'px'
      itemSt.top =
        dragEvt.clientY +
        startCoords.y -
        parentCoords.y -
        mouseDownEvt.clientY +
        'px'
    },
    style: {
      cursor: 'n-resize',
    },
  },
  {
    type: ResizeTypes.MIDDLE_BOTTOM,
    handler: (
      dragEvt: MouseEvent,
      mouseDownEvt: MouseEvent,
      objRef: RefObject<HTMLDivElement>,
      startCoords: TCoords,
    ) => {
      const itemSt = objRef.current!.style
      itemSt.height = dragEvt.clientY - startCoords.y + 'px'
    },
    style: {
      cursor: 's-resize',
    },
  },
]
