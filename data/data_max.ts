import { SlideBgType, TDocument, TSlide, TText } from '../types/type'

const text: TText = {
	width: 200,
	height: 300,
	x: 20,
	y: 70,
	rotationAngel: 0,
	value: 'Text',
	formatting: {
		variation: {
			italic: true,
			bold: true,
			underline: true,
		},
		fontSize: 23,
		fontFamily: 'FontName',
		color: '#000000',
	},
}

const slide1: TSlide = {
	id: 1,
	background: {
		variation: SlideBgType.Color,
		value: '#FFFFFF',
	},
	objects: [],
}

const slide2: TSlide = {
	id: 2,
	background: {
		variation: SlideBgType.Img,
		value: 'https://test.com/test_back.png',
	},
	objects: [],
}

const slide3: TSlide = {
	id: 3,
	background: {
		variation: SlideBgType.Img,
		value: 'https://test.com/test_back.png',
	},
	objects: [],
}

const doc: TDocument = {
	name: 'Test presentation',
	slides: [slide1, slide2, slide3],
}
