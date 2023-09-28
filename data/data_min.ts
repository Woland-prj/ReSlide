// Denis

import { TDocument, TText, TImage } from '../types/type'
const doc: TDocument = {
	name: 'Test presentation',
	slides: [],
}

const text: TText = {
	value: "Text",
	formatting: {
		variation: {
		    italic: true,
		    bold: true,
		    underline: true,
	    },
	    fontFamily: "FontName",
	    color: "#000000",
	}
}
const image: TImage = {
	link: "https://...",
	width: 200,
	height: 200,
}