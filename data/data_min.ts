import { FormattingVariation, TSlideObject, ShapeVariation, SlideBgType, TDocument, TSlide } from '../types/type'

const doc: TDocument = {
	name: 'Test presentation',
	slides: [],
}

const slide: TSlide = {
	id: 1,
	background: {
		variation: SlideBgType.Color,
		value: 'https://test.com/test_back.png',
	},
	objects: [],
}

const vector: TSlideObject = {
	type: {
		shape: ShapeVariation.Rectangle,
		fillColor: "red",
		strokeColor: "#f0f0f0",
		strokeSize: 50,
	},
	width: 50,
	height: 50,
	x: 50,
	y: 50,
	rotationAngel: 30,
}

const object: TSlideObject = {
	type: {
		Link: "https://imgpng.ru/d/square_PNG19.png",
		Width: 50,
		Height: 50,
	},
	width: 50,
	height: 50,
	x: 50,
	y: 50,
	rotationAngel: 30,
}

const text: TSlideObject = {
	type: {
		value: "string",
		formatting: {
			variation: FormattingVariation.Italic,
			fontFamily: "Arial",
			color: "#232323",
		},
	},
	width: 50,
	height: 50,
	x: 50,
	y: 50,
	rotationAngel: 30,
}