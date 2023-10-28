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

export type TSlide = {
  id: number
  background: TSlideBackground
  objects: TSlideObject[]
  isSelected: boolean
}

export type TFormattingVariation = {
  italic: boolean
  bold: boolean
  underline: boolean
}

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
  link: string
}

export type TDocument = {
  name: string
  slides: TSlide[]
}
