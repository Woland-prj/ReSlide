import {
  ObjectType,
  SlideBgType,
  TDocument,
  TImage,
  TSlide,
  //TText,
} from '../types/type'

// export const text: TText = {
//   id: 1,
//   type: ObjectType.Text,
//   size: {
//     width: 200,
//     height: 300,
//   },
//   coords: {
//     x: 20,
//     y: 70,
//   },
//   rotationAngle: 0,

//   value: 'Text',
//   formatting: {
//     variation: {
//       italic: true,
//       bold: true,
//       underline: true,
//     },
//     fontSize: 23,
//     fontFamily: 'FontName',
//     color: '#000000',
//   },
//   isSelected: false,
// }

export const image: TImage = {
  id: 3,
  type: ObjectType.Image,
  link: 'https://...',
  size: {
    width: 50,
    height: 50,
  },
  coords: {
    x: 50,
    y: 50,
  },
  rotationAngle: 30,
  isSelected: true,
}

export const slide1: TSlide = {
  id: 1,
  background: {
    variation: SlideBgType.Color,
    value: '#FFFFFF',
  },
  size: {
    width: 960,
    height: 540,
  },
  objects: [image /*, text*/],
  isSelected: true,
}

export const slide2: TSlide = {
  id: 2,
  background: {
    variation: SlideBgType.Img,
    value: 'https://test.com/test_back.png',
  },
  size: {
    width: 960,
    height: 540,
  },
  objects: [],
  isSelected: false,
}

export const slide3: TSlide = {
  id: 3,
  background: {
    variation: SlideBgType.Img,
    value: 'https://test.com/test_back.png',
  },
  size: {
    width: 960,
    height: 540,
  },
  objects: [
    /*text, text*/
  ],
  isSelected: false,
}

export const doc: TDocument = {
  name: 'Test presentation',
  slides: [slide1, slide2, slide3],
}
