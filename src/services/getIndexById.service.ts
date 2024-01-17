import { TImage, TSlide, TText, TVector } from '@/types/type'

export const getIndexById = <T extends TSlide | TVector | TText | TImage>(
  objects: Array<T>,
  id: number,
): number | null => {
  let objIndex: number | null = null
  objects.forEach((object, index) => {
    if (object.id === id) objIndex = index
  })
  return objIndex
}
