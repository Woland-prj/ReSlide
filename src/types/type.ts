// Denis
export const enum ObjectType {
  Text,
  Vector,
  Image,
}

export const enum SlideBgType {
  Img,
  Color,
}

export type TSlideBackground = {
  variation: SlideBgType
  value: string
}

export type TSize = {
  width: number
  height: number
}

export type TCoords = {
  x: number
  y: number
}

export type TSlideObject = {
  id: number
  size: TSize
  coords: TCoords
  rotationAngle: number
  isSelected: boolean
}

export type TFormattingVariation = {
  italic: 'italic' | 'normal'
  bold: 'bold' | 'normal'
  decorationLine:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through'
} // Раньше тут был boolean

export type TFormatting = {
  variation: TFormattingVariation
  fontFamily: string
  fontSize: number
  color: string
}

export type TText = TSlideObject & {
  type: ObjectType.Text
  value: string
  formatting: TFormatting
}

export const enum ShapeVariation {
  Rectangle = 'rectangle',
  Triangle = 'triangle',
  Ellipse = 'ellipse',
}

export type TVector = TSlideObject & {
  type: ObjectType.Vector
  shape: ShapeVariation
  fillColor: string
  strokeColor: string
  strokeSize: number
}

export type TImage = TSlideObject & {
  type: ObjectType.Image
  data: string
  name: string
}

export type TSlide = {
  id: number
  background: TSlideBackground
  objects: Array<TText | TVector | TImage>
  isSelected: boolean
}

export type TDocument = {
  name: string
  size: TSize
  slides: TSlide[]
}

export const enum AppMode {
  EDIT_MODE = 'EDIT_MODE',
  VIEW_MODE = 'VIEW_MODE',
}

export type TEditor = {
  activeSlideId: number
  activeToolId: string
  globalSlideId: number
  globalObjectId: number
  appMode: AppMode
}
