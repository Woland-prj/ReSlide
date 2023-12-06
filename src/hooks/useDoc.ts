import { useTypedSelector } from './useTypedSelector'

export const useDoc = () => {
  const doc = useTypedSelector(state => state.document)

  const slides = doc.slides
  const name = doc.name
  const size = doc.size

  return { name, size, slides }
}
