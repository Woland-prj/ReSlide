// TODO: сделать типы TVector и TImage
// Ветка Никиты

export type TDocument = {
	name: string
	slides: TSlide[]
}

export type TSlide = {
	id: number
	background: TSlideBackground
	objects: TSlideObject[]
}

export const enum SlideBgType {
	Image,
	Color,
}

export type TSlideBackground = {
	type: SlideBgType
	value: string
}

export type TSlideObject = {
	type: TText | TVector | TImage
	width: number
	height: number
	x: number
	y: number
	rotationAngel: number
}

export type TText = {
	Value: string
	Formatting: TFormatting
}

export const enum FormattingVariation {
	Italic,
	Bold,
	Underline,
}

export type TFormatting = {
	Variation: FormattingVariation
	FontFamily: string
	Color: string
}

export type TVector = {
	Shape: ShapeVariation
	FillColor: string
	StrokeColor: string
	StrokeSize: number
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
