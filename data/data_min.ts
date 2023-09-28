// Denis

import { TDocument } from '../types/type'
import { TText } from '../types/type'
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