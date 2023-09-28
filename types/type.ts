// TODO: сделать типы TVector и TImage
// Ветка Вадима

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
	Color = 'Color',
}

export type TSlideBackground = {
	variation: SlideBgType
	value: string
}
// Проверка

export type TSlideObject = {
	type: TText | TVector | TImage
	width: number
	height: number
	x: number
	y: number
	rotationAngel: number
}

export type TText = {
	value: string
	formatting: TFormatting
}

export const enum FormattingVariation {
	Italic,
	Bold,
	Underline,
}

export type TFormatting = {
	variation: FormattingVariation
	fontFamily: string
	color: string
}

export type TVector = {
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

export type TImage = {
	Link: string
	Width: number
	Height: number
}
