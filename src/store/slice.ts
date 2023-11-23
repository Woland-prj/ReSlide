import { SlideBgType } from '@/types/type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  TChangeDocFormatPayload,
  TChangeDocNamePayload,
  TInitialState,
} from './types'

const initialState: TInitialState = {
  document: {
    name: 'Blank presentation',
    size: {
      width: 960,
      height: 540,
    },
    slides: [
      {
        id: 1,
        background: {
          variation: SlideBgType.Color,
          value: '#FFFFFF',
        },
        objects: [],
        isSelected: true,
      },
    ],
  },
}

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
