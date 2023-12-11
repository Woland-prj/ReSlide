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
    default:
      return state
  }
}

export { editorReducer }
