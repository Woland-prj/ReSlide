const enum EditorActions {
  SET_ACTIVE_SLIDE = 'SET_ACTIVE_SLIDE',
  SET_ACTIVE_TOOL = 'SET_ACTIVE_TOOL',
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

type TEditorAction = TSetActiveSlideAction | TSetActiveToolAction

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
}

export type { TEditorAction }
export { EditorActions, createEditorActions }
