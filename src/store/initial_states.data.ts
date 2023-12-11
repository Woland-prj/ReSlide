import {
  ObjectType,
  ShapeVariation,
  SlideBgType,
  TDocument,
  TEditor,
  TSlide,
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
      objects: [
        {
          id: 1,
          type: ObjectType.Vector,
          shape: ShapeVariation.Rectangle,
          fillColor: 'purple',
          strokeColor: 'blue',
          strokeSize: 5,
          size: {
            width: 200,
            height: 300,
          },
          coords: {
            x: 50,
            y: 50,
          },
          rotationAngle: 0,
          isSelected: false,
        },
      ],
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
}

export { docInitialState, docInitialName, voidSlide, initialEditor }
