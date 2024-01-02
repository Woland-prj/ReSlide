import {
  ObjectType,
  ShapeVariation,
  SlideBgType,
  TDocument,
  TEditor,
  TImage,
  TSlide,
  TText,
  TVector,
} from '@/types/type'

const docInitialName: string = 'Презентация без названия'

const docInitialState: TDocument = {
  name: docInitialName,
  size: {
    width: 960,
    height: 540,
  },
  slides: [
    {
      id: 0,
      background: {
        variation: SlideBgType.Color,
        value: '#FFFFFF',
      },
      objects: [],
      isSelected: false,
    },
  ],
}

const voidSlide: TSlide = {
  id: 0,
  background: {
    variation: SlideBgType.Color,
    value: '#FFFFFF',
  },
  objects: [],
  isSelected: false,
}

const initialEditor: TEditor = {
  activeSlideId: 0,
  activeToolId: 'select_btn',
  globalSlideId: 0,
  globalObjectId: 0,
}

const initText: TText = {
  id: 0,
  size: {
    width: 150,
    height: 80,
  },
  coords: {
    x: 0,
    y: 0,
  },
  rotationAngle: 0,
  isSelected: false,
  type: ObjectType.Text,
  value: 'Новый текст',
  formatting: {
    variation: {
      italic: 'normal',
      bold: 'normal',
      decorationLine: 'none',
    },
    fontFamily: 'IBM Plex Sans',
    fontSize: 18,
    color: '#000000',
  },
}

const initShape: TVector = {
  id: 0,
  size: {
    width: 150,
    height: 80,
  },
  coords: {
    x: 0,
    y: 0,
  },
  rotationAngle: 0,
  isSelected: false,
  type: ObjectType.Vector,
  shape: ShapeVariation.Rectangle,
  strokeColor: 'red',
  strokeSize: 3,
  fillColor: '#aaaaaa',
}

const initImg: TImage = {
  id: 0,
  size: {
    width: 300,
    height: 190,
  },
  coords: {
    x: 0,
    y: 0,
  },
  rotationAngle: 0,
  isSelected: false,
  type: ObjectType.Image,
  name: 'init name',
  data: '',
}

export {
  docInitialName,
  docInitialState,
  initImg,
  initShape,
  initText,
  initialEditor,
  voidSlide,
}

// {
//   id: 1,
//     type: ObjectType.Vector,
//   shape: ShapeVariation.Rectangle,
//   fillColor: 'purple',
//   strokeColor: 'blue',
//   strokeSize: 5,
//   size: {
//   width: 200,
//     height: 300,
// },
//   coords: {
//     x: 50,
//       y: 50,
//   },
//   rotationAngle: 0,
//     isSelected: false,
// },
