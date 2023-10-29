import {
  ObjectType,
  ShapeVariation,
  SlideBgType,
  TDocument,
  TImage,
  TSlide,
  TText,
  TVector,
} from '@/types/type'

export const text: TText = {
  id: 1,
  type: ObjectType.Text,
  size: {
    width: 575,
    height: 300,
  },
  coords: {
    x: 20,
    y: 70,
  },
  rotationAngle: 0,

  value: 'Text Text Text',
  formatting: {
    variation: {
      italic: true,
      bold: true,
      underline: true,
    },
    fontSize: 100,
    fontFamily: 'Times New Roman',
    color: '#FF0000',
  },
  isSelected: false,
}

export const vector: TVector = {
  id: 2,
  type: ObjectType.Vector,
  shape: ShapeVariation.Rectangle,
  fillColor: 'orange',
  strokeColor: 'purple',
  strokeSize: 5,
  size: {
    width: 100,
    height: 50,
  },
  coords: {
    x: 50,
    y: 50,
  },
  rotationAngle: 30,
  isSelected: true,
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

export const slide1: TSlide = {
  id: 1,
  background: {
    variation: SlideBgType.Color,
    value: '#FFFFFF',
  },
  objects: [image, vector, text],
  isSelected: false,
}

export const slide2: TSlide = {
  id: 2,
  background: {
    variation: SlideBgType.Img,
    value: 'https://test.com/test_back.png',
  },
  objects: [text, vector, image],
  isSelected: true,
}

export const slide3: TSlide = {
  id: 3,
  background: {
    variation: SlideBgType.Img,
    value: 'https://test.com/test_back.png',
  },
  objects: [vector, image, text],
  isSelected: false,
}

export const doc: TDocument = {
  name: 'Test presentation',
  slides: [slide1, slide2, slide3],
}
