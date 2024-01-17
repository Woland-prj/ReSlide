import {
  AppMode,
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
const brandStr: string = ' - ReSlide'
const rewriteConfirmQuestion = 'Перезаписать текущую презентацию?'

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
  appMode: AppMode.EDIT_MODE,
  selectedObjectsIds: [],
  isShiftPressed: false,
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

const slidePlaceholderText: string =
  'Ни одного слайда не выбрано. Чтобы начать работу нажмите "+" на панели действий'

export {
  brandStr,
  docInitialName,
  docInitialState,
  initImg,
  initShape,
  initText,
  initialEditor,
  rewriteConfirmQuestion,
  slidePlaceholderText,
  voidSlide,
}
