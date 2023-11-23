import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  document: docSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
