import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { docInitialState } from '@/store/initial_states.data'
import {
  TChangeDocFormatPayload,
  TChangeDocNamePayload,
  TInitialState,
} from './types'

const initialState: TInitialState = docInitialState

export const docSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    changeDocName: (state, action: PayloadAction<TChangeDocNamePayload>) => {
      state.document.name = action.payload.name
    },
    changeDocFormat: (
      state,
      action: PayloadAction<TChangeDocFormatPayload>,
    ) => {
      state.document.size = action.payload.size
    },
  },
})
