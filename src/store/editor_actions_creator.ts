import { AppMode } from '@/types/type'

const enum EditorActions {
  SET_ACTIVE_SLIDE = 'SET_ACTIVE_SLIDE',
  SET_ACTIVE_TOOL = 'SET_ACTIVE_TOOL',
  GENERATE_ID = 'GENERATE_ID',
  SET_APP_MODE = 'SET_APP_MODE',
  SELECTED_OBJECT_ID = 'SELECTED_OBJECT_ID',
  ADD_SELECTED_OBJECT_ID = 'ADD_SELECTED_OBJECT_ID',
  REMOVE_SELECTED_OBJECT_ID = 'REMOVE_SELECTED_OBJECT_ID',
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

type TAddActiveSlideId = {
  type: EditorActions.ADD_SELECTED_OBJECT_ID
  payload: {
    id: number
  }
}

type TRemoveActiveSlideId = {
  type: EditorActions.REMOVE_SELECTED_OBJECT_ID
  payload: {
    id: number
  }
}

type TEditorAction =
  | TSetActiveSlideAction
  | TSetActiveToolAction
  | TGenerateIdAction
  | TSetAppMode
  | TAddActiveSlideId
  | TRemoveActiveSlideId

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
  generateIdAction: (type: 'slideId' | 'objectId'): TEditorAction => {
    return {
      type: EditorActions.GENERATE_ID,
      payload: {
        type: type,
      },
    }
  },
  setAppModeAction: (appMode: AppMode): TEditorAction => {
    return {
      type: EditorActions.SET_APP_MODE,
      payload: {
        mode: appMode,
      },
    }
  },
  addSelectedObjectIdAction: (id: number): TEditorAction => {
    return {
      type: EditorActions.ADD_SELECTED_OBJECT_ID,
      payload: {
        id: id,
      },
    }
  },
  removeSelectedObjectIdAction: (id: number): TEditorAction => {
    return {
      type: EditorActions.REMOVE_SELECTED_OBJECT_ID,
      payload: {
        id: id,
      },
    }
  },
}

export { EditorActions, createEditorActions }
export type { TEditorAction }
