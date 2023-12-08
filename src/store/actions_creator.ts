import { TDocument, TSize, TSlide } from '@/types/type'

enum DocActions {
  CHANGE_DOC_NAME_ACTION = 'CHANGE_DOC_NAME_ACTION',
  CHANGE_DOC_SIZE_ACTION = 'CHANGE_DOC_SIZE_ACTION',
  ADD_SLIDE_ACTION = 'ADD_SLIDE_ACTION',
  LOAD_DOC_ACTION = 'LOAD_DOC_ACTION',
}

type TChangeDocNameAction = {
  type: DocActions.CHANGE_DOC_NAME_ACTION
  payload: {
    name: string
  }
}

type TChangeDocSizeAction = {
  type: DocActions.CHANGE_DOC_SIZE_ACTION
  payload: {
    size: TSize
  }
}

type TAddSlideAction = {
  type: DocActions.ADD_SLIDE_ACTION
}

type TLoadDocAction = {
  type: DocActions.LOAD_DOC_ACTION
  payload: {
    doc: TDocument
  }
}

type TAction =
  | TChangeDocNameAction
  | TChangeDocSizeAction
  | TAddSlideAction
  | TLoadDocAction

const createActions = {
  changeDocNameAction: (name: string): TAction => {
    return {
      type: DocActions.CHANGE_DOC_NAME_ACTION,
      payload: {
        name: name,
      },
    }
  },
  changeDocSizeAction: (size: TSize): TAction => {
    return {
      type: DocActions.CHANGE_DOC_SIZE_ACTION,
      payload: {
        size: size,
      },
    }
  },
  addSlideAction: (): TAction => {
    return {
      type: DocActions.ADD_SLIDE_ACTION,
    }
  },
  loadDocAction: (doc: TDocument): TAction => {
    return {
      type: DocActions.LOAD_DOC_ACTION,
      payload: {
        doc: doc,
      },
    }
  },
}

export { DocActions, createActions }
export type { TAction }
