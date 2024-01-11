import { RefObject } from 'react'
import { TCoords, TSize } from './type'

export const enum ResizeTypes {
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  MIDDLE_LEFT = 'MIDDLE_LEFT',
  MIDDLE_RIGHT = 'MIDDLE_RIGHT',
  MIDDLE_TOP = 'MIDDLE_TOP',
  MIDDLE_BOTTOM = 'MIDDLE_BOTTOM',
}

export type ResizeDotHandler = (
  dragEvt: MouseEvent,
  mouseDownEvt: MouseEvent,
  objRef: RefObject<HTMLDivElement>,
  startCoords: TCoords,
  parentCoords: TCoords,
  startSize: TSize,
) => void

export type TResizeDot = {
  type: ResizeTypes
  handler: ResizeDotHandler
  style: React.CSSProperties
}
