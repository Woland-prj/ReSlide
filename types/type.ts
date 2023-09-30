
// Denis

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
	link: string
	width: number
	height: number
}
