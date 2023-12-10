import { useTypedSelector } from './useTypedSelector'

export const useEditor = () => {
  const editor = useTypedSelector(state => state.editor)

  const active_tool_id = editor.activeToolId
  const active_slide_id = editor.activeSlideId

  return { active_tool_id, active_slide_id }
}
