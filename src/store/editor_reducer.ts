import { EditorActions, TEditorAction } from '@/store/editor_actions_creator'
import { initialEditor } from '@/store/initial_states.data'
import { TEditor } from '@/types/type'

const editorReducer = (
  state: TEditor = initialEditor,
  action: TEditorAction,
): TEditor => {
  switch (action.type) {
    case EditorActions.SET_ACTIVE_SLIDE:
      return {
        ...state,
        activeSlideId: action.payload.id,
      }
    case EditorActions.SET_ACTIVE_TOOL:
      return {
        ...state,
        activeToolId: action.payload.id,
      }
    case EditorActions.GENERATE_ID:
      if (action.payload.type == 'slideId')
        return {
          ...state,
          globalSlideId: state.globalSlideId + 1,
        }
      else
        return {
          ...state,
          globalObjectId: state.globalObjectId + 1,
        }
    case EditorActions.SET_APP_MODE:
      return {
        ...state,
        appMode: action.payload.mode,
      }
    case EditorActions.ADD_SELECTED_OBJECT_ID:
      console.log(action.payload.id)
      return {
        ...state,
        selectedObjectsIds: [...state.selectedObjectsIds, action.payload.id],
      }
    case EditorActions.REMOVE_SELECTED_OBJECT_ID:
      console.log(action.payload.id)
      return {
        ...state,
        selectedObjectsIds: state.selectedObjectsIds.filter(id => {
          if (id != action.payload.id) return id
        }),
      }
    case EditorActions.SET_SHIFT_PRESSED:
      return {
        ...state,
        isShiftPressed: action.payload.isPressed,
      }
    case EditorActions.SET_GLOBAL_ID:
      if (action.payload.type == 'slideId')
        return {
          ...state,
          globalSlideId: action.payload.id,
        }
      else
        return {
          ...state,
          globalObjectId: action.payload.id,
        }
    default:
      return { ...state }
  }
}

export { editorReducer }
