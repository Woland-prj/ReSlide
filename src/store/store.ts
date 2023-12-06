import { combineReducers } from 'redux'
import { configureStore } from 'react-redux'

import { docReducer } from './reducer'

const rootReducer = combineReducers({
  document: docReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type TypeRootState = ReturnType<typeof rootReducer>
