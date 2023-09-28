import { SlideBgType, TDocument, TSlide, TText } from '../types/type'

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
