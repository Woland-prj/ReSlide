import {
  ObjectType,
  ShapeVariation,
  SlideBgType,
  TDocument,
  TImage,
  TSlide,
  //TText,
  TVector,
} from '@/types/type'

export const doc: TDocument = {
  name: 'Test presentation',
  slides: [],
}

export const slide: TSlide = {
  isSelected: false,
  id: 1,
  background: {
    variation: SlideBgType.Color,
    value: 'https://test.com/test_back.png',
  },
  size: {
    width: 960,
    height: 540,
  },
  objects: [],
}

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

export const vector: TVector = {
  id: 2,
  type: ObjectType.Vector,
  shape: ShapeVariation.Rectangle,
  fillColor: 'red',
  strokeColor: '#f0f0f0',
  strokeSize: 50,
  size: {
    width: 50,
    height: 50,
  },
  coords: {
    x: 50,
    y: 50,
  },
  rotationAngle: 30,
  isSelected: false,
  value: '',
  formatting: {
    variation: {
      italic: 'normal',
      bold: 'normal',
      decorationLine: 'none',
    },
    fontFamily: 'Times New Roman',
    fontSize: 11,
    color: '#FF0000',
  },
}

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
  isSelected: false,
}
