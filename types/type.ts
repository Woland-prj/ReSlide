// TODO: сделать типы TVector и TImage
// Nikita

export type TDocument = {
	name: string
	slides: TSlide[]
}

export type TSlide = {
	id: number
	background: TSlideBackground
	objects: TSlideObject[]
}

export enum SlideBgType {
	Img,
	Color,
}

export type TSlideBackground = {
	variation: SlideBgType
	value: string
}

export const enum objectType {
	TText,
	TImage,
	TVector,
}

export type TSlideObject = {
	type: objectType
	width: number
	height: number
	x: number
	y: number
	rotationAngel: number
}

export type TText = TSlideObject & {
	value: string
	formatting: TFormatting
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

export type TVector = TSlideObject & {
	shape: ShapeVariation
	fillColor: string
	strokeColor: string
	strokeSize: number
}

export const enum ShapeVariation {
	Rectangle,
	Triangle,
	Circle,
}

export type TImage = TSlideObject & {
	link: string
	width: number
	height: number
}
