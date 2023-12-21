import {
  ObjectType,
  SlideBgType,
  TDocument,
  TEditor,
  TSlide,
  TText,
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
      id: 1,
      background: {
        variation: SlideBgType.Color,
        value: '#FFFFFF',
      },
      objects: [],
      isSelected: true,
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
  activeSlideId: 1,
  activeToolId: 'select_btn',
  globalSlideId: 0,
  globalObjectId: 0,
}

const initText: TText = {
  id: 0,
  size: {
    width: 100,
    height: 50,
  },
  coords: {
    x: 0,
    y: 0,
  },
  rotationAngle: 0,
  isSelected: true,
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

export { docInitialState, docInitialName, voidSlide, initialEditor, initText }

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
