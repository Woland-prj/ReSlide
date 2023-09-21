// TODO: сделать типы TVector и TImage

type TSlideObject = {
	type: TText // | TVector | TImage
	size: TSlideObjectSize
	cords: TSlideObjectCords
	rotationAngel: number
}

type TSlideObjectSize = {
	width: number
	height: number
}

type TSlideObjectCords = {
	x: number
	y: number
}
type TText = {
	Value: string
	Formatting: TFormatting
}

// Твое, конечно дело, но мб через enum? Вроде того:
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
