import { useTypedSelector } from './useTypedSelector'

export const useEditor = () => {
  const editor = useTypedSelector(state => state.editor)

  const activeToolId = editor.activeToolId
  const activeSlideId = editor.activeSlideId
  const globalSlideId = editor.globalSlideId
  const globalObjectId = editor.globalObjectId

  return { activeToolId, activeSlideId, globalObjectId, globalSlideId }
}
