// TODO: сделать типы TVector и TImage
// Ветка Никиты

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
	Color
}

type TSlideBackground = {
	type: SlideBgType
	value: string
}

type TSlideObject = {
	type: TText // | TVector | TImage
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

// Денис, мб через enum? Вроде того:
// enum FormattingVariation {
// 	Italic,
// 	Bold,
// 	Underline
// }

type TFormatting = {
	// Variation: FormattingVariation
	Italics: boolean
	Bold: boolean
	Underline: boolean
	FontFamily: string
	Color: string
}
