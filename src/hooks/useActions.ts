import { createDocActions } from '@/store/doc_actions_creator'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createEditorActions } from '@/store/editor_actions_creator'

const rootAction = {
  ...createDocActions,
  ...createEditorActions,
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}
