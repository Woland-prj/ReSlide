import { combineReducers, createStore } from 'redux'

import { docReducer } from './doc_reducer'
import { editorReducer } from '@/store/editor_reducer'

const rootReducer = combineReducers({
  document: docReducer,
  editor: editorReducer,
})

export const store = createStore(rootReducer)

export type TypeRootState = ReturnType<typeof rootReducer>
