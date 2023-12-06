import { docInitialState } from './initial_states.data'
import { TDocument } from '@/types/type'
import { DocActions, TAction } from '@/store/actionsCreator'

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
    default:
      return state
  }
}

export { docReducer }
