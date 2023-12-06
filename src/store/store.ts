import { combineReducers, createStore } from 'redux'

import { docReducer } from './doc_reducer'

const rootReducer = combineReducers({
  document: docReducer,
})

export const store = createStore(rootReducer)

export type TypeRootState = ReturnType<typeof rootReducer>
