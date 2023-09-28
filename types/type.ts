
type TDocument = {
	name: string
	slides: TSlide[]
}

type TSlide = {
	id: number
	background: TSlideBackground
	objects: TSlideObject[]
}

const enum SlideBgType {
	Image,
	Color,
}

type TSlideBackground = {
	type: SlideBgType
	value: string
}
// Проверка

type TSlideObject = {
	type: TText | TVector | TImage
	width: number
	height: number
	x: number
	y: number
	rotationAngel: number
}

type TText = {
	Value: string
	Formatting: TFormatting
}


const enum FormattingVariation {
 	Italic,
 	Bold,
 	Underline
 }

type TFormatting = {
	Variation: FormattingVariation
	FontFamily: string
	Color: string
}

type TVector = {
	Shape: ShapeVariation
	FillColor: string
	StrokeColor: string
	StrokeSize: number
}

const enum ShapeVariation {
	Rectangle,
	Triangle,
	Circle,
}

type TImage = {
	Link: string
	Width: number
	Height: number
}
