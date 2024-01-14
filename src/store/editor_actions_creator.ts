import { AppMode } from '@/types/type'

const enum EditorActions {
  SET_ACTIVE_SLIDE = 'SET_ACTIVE_SLIDE',
  SET_ACTIVE_TOOL = 'SET_ACTIVE_TOOL',
  GENERATE_ID = 'GENERATE_ID',
  SET_APP_MODE = 'SET_APP_MODE',
  SELECTED_OBJECT_ID = 'SELECTED_OBJECT_ID',
  ADD_SELECTED_OBJECT_ID = 'ADD_SELECTED_OBJECT_ID',
  REMOVE_SELECTED_OBJECT_ID = 'REMOVE_SELECTED_OBJECT_ID',
  SET_SHIFT_PRESSED = 'SET_SHIFT_PRESSED',
  SET_GLOBAL_ID = 'SET_GLOBAL_ID',
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

type TSetAppModeAction = {
  type: EditorActions.SET_APP_MODE
  payload: {
    mode: AppMode
  }
}

type TAddActiveSlideIdAction = {
  type: EditorActions.ADD_SELECTED_OBJECT_ID
  payload: {
    id: number
  }
}

type TRemoveActiveSlideIdAction = {
  type: EditorActions.REMOVE_SELECTED_OBJECT_ID
  payload: {
    id: number
  }
}

type TSetShiftPressedAction = {
  type: EditorActions.SET_SHIFT_PRESSED
  payload: {
    isPressed: boolean
  }
}

type TSetGlobalIdAction = {
  type: EditorActions.SET_GLOBAL_ID
  payload: {
    id: number
    type: 'slideId' | 'objectId'
  }
}

type TEditorAction =
  | TSetActiveSlideAction
  | TSetActiveToolAction
  | TGenerateIdAction
  | TSetAppModeAction
  | TAddActiveSlideIdAction
  | TRemoveActiveSlideIdAction
  | TSetShiftPressedAction
  | TSetGlobalIdAction

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
  setShiftPressedAction: (isPressed: boolean): TEditorAction => {
    return {
      type: EditorActions.SET_SHIFT_PRESSED,
      payload: {
        isPressed: isPressed,
      },
    }
  },
  setGlobalIdAction: (
    id: number,
    type: 'slideId' | 'objectId',
  ): TEditorAction => {
    return {
      type: EditorActions.SET_GLOBAL_ID,
      payload: {
        id: id,
        type: type,
      },
    }
  },
}

export { EditorActions, createEditorActions }
export type { TEditorAction }
