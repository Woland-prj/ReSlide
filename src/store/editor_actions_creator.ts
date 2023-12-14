const enum EditorActions {
  SET_ACTIVE_SLIDE = 'SET_ACTIVE_SLIDE',
  SET_ACTIVE_TOOL = 'SET_ACTIVE_TOOL',
  GENERATE_ID = 'GENERATE_ID',
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

type TEditorAction =
  | TSetActiveSlideAction
  | TSetActiveToolAction
  | TGenerateIdAction

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
}

export type { TEditorAction }
export { EditorActions, createEditorActions }
