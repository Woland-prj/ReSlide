import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { docSlice } from './slice'

const rootReducer = combineReducers({
  document: docSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type TypeRootState = ReturnType<typeof rootReducer>
