import { useTypedSelector } from './useTypedSelector'

export const useDoc = () => {
  const doc = useTypedSelector(state => state.document)

  return { ...doc }
}
