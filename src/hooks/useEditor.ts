import { useTypedSelector } from './useTypedSelector'

export const useEditor = () => {
  const editor = useTypedSelector(state => state.editor)

  return { ...editor }
}
