import {
  ObjectTypes,
  ShapeVariation,
  SlideBgType,
  TDocument,
  TImage,
  TSlide,
  TText,
  TVector,
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

const text: TText = {
  id: 1,
  type: ObjectTypes.Text,
  size: {
    width: 200,
    height: 300,
  },
  coords: {
    x: 20,
    y: 70,
  },
  rotationAngle: 0,

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

const vector: TVector = {
  id: 2,
  type: ObjectTypes.Vector,
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
}

const image: TImage = {
  id: 3,
  type: ObjectTypes.Image,
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
}
