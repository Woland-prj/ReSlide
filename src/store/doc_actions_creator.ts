import { TCoords, TDocument, TSize } from '@/types/type'

enum DocActions {
  CHANGE_DOC_NAME_ACTION = 'CHANGE_DOC_NAME_ACTION',
  CHANGE_DOC_SIZE_ACTION = 'CHANGE_DOC_SIZE_ACTION',
  ADD_SLIDE_ACTION = 'ADD_SLIDE_ACTION',
  LOAD_DOC_ACTION = 'LOAD_DOC_ACTION',
  CHANGE_OBJECT_COORDS = 'CHANGE_OBJECT_COORDS',
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

type TChangeObjectCoordsAction = {
  type: DocActions.CHANGE_OBJECT_COORDS
  payload: {
    objectId: number
    coords: TCoords
  }
}

type TDocAction =
  | TChangeDocNameAction
  | TChangeDocSizeAction
  | TAddSlideAction
  | TLoadDocAction
  | TChangeObjectCoordsAction

const createDocActions = {
  changeDocNameAction: (name: string): TDocAction => {
    return {
      type: DocActions.CHANGE_DOC_NAME_ACTION,
      payload: {
        name: name,
      },
    }
  },
  changeDocSizeAction: (size: TSize): TDocAction => {
    return {
      type: DocActions.CHANGE_DOC_SIZE_ACTION,
      payload: {
        size: size,
      },
    }
  },
  addSlideAction: (): TDocAction => {
    return {
      type: DocActions.ADD_SLIDE_ACTION,
    }
  },
  loadDocAction: (doc: TDocument): TDocAction => {
    return {
      type: DocActions.LOAD_DOC_ACTION,
      payload: {
        doc: doc,
      },
    }
  },
  changeObjectCoords: (id: number, x: number, y: number): TDocAction => {
    return {
      type: DocActions.CHANGE_OBJECT_COORDS,
      payload: {
        objectId: id,
        coords: {
          x: x,
          y: y,
        },
      },
    }
  },
}

export { DocActions, createDocActions }
export type { TDocAction }
