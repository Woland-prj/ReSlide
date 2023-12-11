import { docInitialState, voidSlide } from './initial_states.data'
import { TDocument, TSlide } from '@/types/type'
import { DocActions, TDocAction } from '@/store/doc_actions_creator'

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
      let slideIndex: number = -1
      let objectIndex: number = -1
      state.slides.forEach((slide, indexS) => {
        slide.objects.forEach((object, indexO) => {
          if (object.id === action.payload.objectId) {
            objectIndex = indexO
            slideIndex = indexS
          }
        })
      })
      const newState: TDocument = state
      newState.slides[slideIndex].objects[objectIndex].coords =
        action.payload.coords
      return {
        ...newState,
      }
    }
    default:
      return state
  }
}

export { docReducer }
