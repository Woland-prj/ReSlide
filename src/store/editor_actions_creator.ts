import { AppMode } from '@/types/type'

const enum EditorActions {
  SET_ACTIVE_SLIDE = 'SET_ACTIVE_SLIDE',
  SET_ACTIVE_TOOL = 'SET_ACTIVE_TOOL',
  GENERATE_ID = 'GENERATE_ID',
  SET_APP_MODE = 'SET_APP_MODE',
}

type TSetActiveSlideAction = {
  type: EditorActions.SET_ACTIVE_SLIDE
  payload: {
    id: number
  }
}

type TSetActiveToolAction = {
  type: EditorActions.SET_ACTIVE_TOOL
  payload: {
    id: string
  }
}

type TGenerateIdAction = {
  type: EditorActions.GENERATE_ID
  payload: {
    type: 'slideId' | 'objectId'
  }
}

type TSetAppMode = {
  type: EditorActions.SET_APP_MODE
  payload: {
    mode: AppMode
  }
}

type TEditorAction =
  | TSetActiveSlideAction
  | TSetActiveToolAction
  | TGenerateIdAction
  | TSetAppMode

const createEditorActions = {
  setActiveSlideAction: (id: number): TEditorAction => {
    return {
      type: EditorActions.SET_ACTIVE_SLIDE,
      payload: {
        id: id,
      },
    }
  },
  setActiveToolAction: (id: string): TEditorAction => {
    return {
      type: EditorActions.SET_ACTIVE_TOOL,
      payload: {
        id: id,
      },
    }
  },
  generateIdAction: (type: 'slideId' | 'objectId') => {
    return {
      type: EditorActions.GENERATE_ID,
      payload: {
        type: type,
      },
    }
  },
  setAppModeAction: (appMode: AppMode) => {
    return {
      type: EditorActions.SET_APP_MODE,
      payload: {
        mode: appMode,
      },
    }
  },
}

export { EditorActions, createEditorActions }
export type { TEditorAction }
