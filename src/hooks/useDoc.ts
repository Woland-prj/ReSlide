import { useTypedSelector } from './useTypedSelector'

export const useDoc = () => {
  const doc = useTypedSelector(state => state.document)

  const slides = doc.document.slides
  const name = doc.document.name
  const size = doc.document.size

  return { name, size, slides }
}
