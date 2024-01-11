import { DocActions, TDocAction } from '@/store/doc_actions_creator'
import { ObjectType, TDocument, TSize, TSlide } from '@/types/type'
import {
  docInitialState,
  initImg,
  initShape,
  initText,
  voidSlide,
} from './initial_states.data'

type TIndexes = {
  slideIndex: number
  objectIndex: number
}
const getIndexesByObjectId = (id: number, state: TDocument): TIndexes => {
  let slideIndex: number = -1
  let objectIndex: number = -1
  state.slides.forEach((slide, indexS) => {
    slide.objects.forEach((object, indexO) => {
      if (object.id === id) {
        objectIndex = indexO
        slideIndex = indexS
      }
    })
  })
  return { slideIndex, objectIndex }
}

const getScaledSize = (realSize: TSize, slideSize: TSize): TSize => {
  if (realSize.width <= slideSize.width && realSize.height <= slideSize.height)
    return realSize
  let scaleK = slideSize.height / realSize.height
  if (realSize.width * scaleK <= slideSize.width) {
    return {
      width: realSize.width * scaleK,
      height: realSize.height * scaleK,
    }
  }
  scaleK = slideSize.width / realSize.width
  return {
    width: realSize.width * scaleK,
    height: realSize.height * scaleK,
  }
}

const docReducer = (
  state: TDocument = docInitialState,
  action: TDocAction,
): TDocument => {
  switch (action.type) {
    case DocActions.CHANGE_DOC_NAME_ACTION:
      return {
        ...state,
        name: action.payload.name,
      }
    case DocActions.CHANGE_DOC_SIZE_ACTION:
      return {
        ...state,
        size: action.payload.size,
      }
    case DocActions.ADD_SLIDE_ACTION: {
      const newVoidSlide: TSlide = {
        ...voidSlide,
        id: action.payload.slideId,
      }
      return {
        ...state,
        slides: [...state.slides, newVoidSlide],
      }
    }
    case DocActions.LOAD_DOC_ACTION:
      return { ...action.payload.doc }
    case DocActions.CHANGE_OBJECT_COORDS: {
      const { slideIndex, objectIndex } = getIndexesByObjectId(
        action.payload.objectId,
        state,
      )
      const newState: TDocument = { ...state }
      newState.slides[slideIndex].objects[objectIndex].coords =
        action.payload.coords
      return newState
    }
    case DocActions.ADD_TEXT_ACTION: {
      let slideIndex: number = 0
      state.slides.forEach((slide, index) => {
        if (slide.id == action.payload.slideId) slideIndex = index
      })
      const newText = {
        ...initText,
        id: action.payload.objectId,
      }
      const newState = { ...state }
      newState.slides[slideIndex].objects = [
        ...newState.slides[slideIndex].objects,
        newText,
      ]
      return newState
    }
    case DocActions.CHANGE_OBJECT_SIZE: {
      const { slideIndex, objectIndex } = getIndexesByObjectId(
        action.payload.objectId,
        state,
      )
      const newState = { ...state }
      newState.slides[slideIndex].objects[objectIndex] = {
        ...newState.slides[slideIndex].objects[objectIndex],
        size: action.payload.size,
      }
      return newState
    }
    case DocActions.CHANGE_TEXT_VALUE_ACTION: {
      const { slideIndex, objectIndex } = getIndexesByObjectId(
        action.payload.objectId,
        state,
      )
      const newState = { ...state }
      const object = newState.slides[slideIndex].objects[objectIndex]
      if (object.type === ObjectType.Text) object.value = action.payload.value
      return newState
    }
    case DocActions.SET_OBJECT_SELECTION: {
      const { slideIndex, objectIndex } = getIndexesByObjectId(
        action.payload.objectId,
        state,
      )
      const newState = { ...state }
      console.log(slideIndex)
      if (slideIndex != -1 && objectIndex != -1)
        newState.slides[slideIndex].objects[objectIndex].isSelected =
          action.payload.selectState

      return newState
    }
    case DocActions.ADD_SHAPE_ACTION: {
      let slideIndex: number = 0
      state.slides.forEach((slide, index) => {
        if (slide.id == action.payload.slideId) slideIndex = index
      })
      const newShape = {
        ...initShape,
        id: action.payload.objectId,
        shape: action.payload.variation,
      }
      const newState = { ...state }
      newState.slides[slideIndex].objects = [
        ...newState.slides[slideIndex].objects,
        newShape,
      ]
      return newState
    }
    case DocActions.ADD_IMAGE_ACTION: {
      let slideIndex: number = 0
      state.slides.forEach((slide, index) => {
        if (slide.id == action.payload.slideId) slideIndex = index
      })
      const newImg = {
        ...initImg,
        id: action.payload.objectId,
        name: action.payload.name,
        data: action.payload.data,
        size: getScaledSize(action.payload.size, state.size),
      }
      const newState = { ...state }
      newState.slides[slideIndex].objects = [
        ...newState.slides[slideIndex].objects,
        newImg,
      ]
      return newState
    }
    case DocActions.DELETE_OBJECT_ACTION: {
      const { slideIndex } = getIndexesByObjectId(
        action.payload.objectId,
        state,
      )
      const newState = { ...state }
      newState.slides[slideIndex].objects = newState.slides[
        slideIndex
      ].objects.filter(object => {
        if (object.id != action.payload.objectId) return object
      })
      return newState
    }
    case DocActions.DUPLICATE_SLIDE_ACTION: {
      let slideIndex: number = 0
      state.slides.forEach((slide, index) => {
        if (slide.id == action.payload.slideId) slideIndex = index
      })
      const newState = { ...state }
      const dupSlide = {
        ...newState.slides[slideIndex],
        id: action.payload.newId,
      }
      newState.slides = [...newState.slides, dupSlide]
      return newState
    }
    default:
      return { ...state }
  }
}

export { docReducer }
