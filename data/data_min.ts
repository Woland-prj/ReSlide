import {
	SlideBgType,
	TDocument,
	TSlide,
	TSlideObject,
	objectType,
} from '../types/type'

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

const object: TSlideObject = {
	type: objectType.TText,
	width: 200,
	height: 300,
	x: 20,
	y: 70,
	rotationAngel: 0,
}
