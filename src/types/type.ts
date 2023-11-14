// Denis

export enum ObjectTypes {
  Text,
  Image,
  Vector,
}

export enum SlideBgType {
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
}

export type TSlide = {
  id: number
  background: TSlideBackground
  objects: TSlideObject[]
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
  type: ObjectTypes.Text
  value: string
  formatting: TFormatting
}

export const enum ShapeVariation {
  Rectangle,
  Triangle,
  Circle,
}

export type TVector = TSlideObject & {
  type: ObjectTypes.Vector
  shape: ShapeVariation
  fillColor: string
  strokeColor: string
  strokeSize: number
}

export type TImage = TSlideObject & {
  type: ObjectTypes.Image
  link: string
}

export type TDocument = {
  name: string
  slides: TSlide[]
}
