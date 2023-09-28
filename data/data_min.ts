import { SlideBgType, TDocument, TSlide } from '../types/type'

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

// const object: TSlideObject = {
// 	data:
// }
