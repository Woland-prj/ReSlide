import { docInitialState, initText, voidSlide } from './initial_states.data'
import { ObjectType, TDocument, TSlide } from '@/types/type'
import { DocActions, TDocAction } from '@/store/doc_actions_creator'

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
        id: state.slides.length + 1,
      }
      return {
        ...state,
        slides: [...state.slides, newVoidSlide],
      }
    }
    case DocActions.LOAD_DOC_ACTION:
      return action.payload.doc
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
        id: state.slides[slideIndex].objects.length + 1,
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
    default:
      return state
  }
}

export { docReducer }
