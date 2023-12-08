import { docInitialState, voidSlide } from './initial_states.data'
import { TDocument, TSlide } from '@/types/type'
import { DocActions, TAction } from '@/store/actions_creator'

const docReducer = (
  state: TDocument = docInitialState,
  action: TAction,
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
    default:
      return state
  }
}

export { docReducer }
