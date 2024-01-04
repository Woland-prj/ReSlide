import { ShapeVariation, TCoords, TDocument, TSize } from '@/types/type'

enum DocActions {
  CHANGE_DOC_NAME_ACTION = 'CHANGE_DOC_NAME_ACTION',
  CHANGE_DOC_SIZE_ACTION = 'CHANGE_DOC_SIZE_ACTION',
  ADD_SLIDE_ACTION = 'ADD_SLIDE_ACTION',
  LOAD_DOC_ACTION = 'LOAD_DOC_ACTION',
  CHANGE_OBJECT_COORDS = 'CHANGE_OBJECT_COORDS',
  CHANGE_OBJECT_SIZE = 'CHANGE_OBJECT_SIZE',
  ADD_TEXT_ACTION = 'ADD_TEXT_ACTION',
  CHANGE_TEXT_VALUE_ACTION = 'CHANGE_TEXT_VALUE_ACTION',
  SET_OBJECT_SELECTION = 'SET_OBJECT_SELECTION',
  ADD_SHAPE_ACTION = 'ADD_SHAPE_ACTION',
  ADD_IMAGE_ACTION = 'ADD_IMAGE_ACTION',
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
  payload: {
    slideId: number
  }
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

type TAddTextAction = {
  type: DocActions.ADD_TEXT_ACTION
  payload: {
    objectId: number
    slideId: number
  }
}

type TChangeObjectSizeAction = {
  type: DocActions.CHANGE_OBJECT_SIZE
  payload: {
    objectId: number
    size: TSize
  }
}

type TChangeTextValueAction = {
  type: DocActions.CHANGE_TEXT_VALUE_ACTION
  payload: {
    objectId: number
    value: string
  }
}

type TSetObjectSelection = {
  type: DocActions.SET_OBJECT_SELECTION
  payload: {
    objectId: number
    selectState: boolean
  }
}

type TAddShapeAction = {
  type: DocActions.ADD_SHAPE_ACTION
  payload: {
    objectId: number
    slideId: number
    variation: ShapeVariation
  }
}

type TAddImageAction = {
  type: DocActions.ADD_IMAGE_ACTION
  payload: {
    objectId: number
    slideId: number
    data: string
    name: string
    size: TSize
  }
}

type TDocAction =
  | TChangeDocNameAction
  | TChangeDocSizeAction
  | TAddSlideAction
  | TLoadDocAction
  | TChangeObjectCoordsAction
  | TAddTextAction
  | TChangeObjectSizeAction
  | TChangeTextValueAction
  | TSetObjectSelection
  | TAddShapeAction
  | TAddImageAction

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
  addSlideAction: (slideId: number): TDocAction => {
    return {
      type: DocActions.ADD_SLIDE_ACTION,
      payload: {
        slideId: slideId,
      },
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
  changeObjectCoordsAction: (id: number, x: number, y: number): TDocAction => {
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
  addTextAction: (objectID: number, slideID: number): TDocAction => {
    return {
      type: DocActions.ADD_TEXT_ACTION,
      payload: {
        objectId: objectID,
        slideId: slideID,
      },
    }
  },
  changeObjectSizeAction: (objectID: number, size: TSize): TDocAction => {
    return {
      type: DocActions.CHANGE_OBJECT_SIZE,
      payload: {
        objectId: objectID,
        size: size,
      },
    }
  },
  changeTextValueAction: (objectID: number, value: string): TDocAction => {
    return {
      type: DocActions.CHANGE_TEXT_VALUE_ACTION,
      payload: {
        objectId: objectID,
        value: value,
      },
    }
  },
  setObjectSelection: (objectId: number, selectState: boolean): TDocAction => {
    return {
      type: DocActions.SET_OBJECT_SELECTION,
      payload: {
        objectId: objectId,
        selectState: selectState,
      },
    }
  },
  addShapeAction: (
    objectID: number,
    slideID: number,
    variation: ShapeVariation,
  ): TDocAction => {
    return {
      type: DocActions.ADD_SHAPE_ACTION,
      payload: {
        objectId: objectID,
        slideId: slideID,
        variation: variation,
      },
    }
  },
  addImageAction: (
    objectID: number,
    slideID: number,
    base64data: string,
    name: string,
    size: TSize,
  ): TDocAction => {
    return {
      type: DocActions.ADD_IMAGE_ACTION,
      payload: {
        objectId: objectID,
        slideId: slideID,
        name: name,
        data: base64data,
        size: size,
      },
    }
  },
}

export { DocActions, createDocActions }
export type { TDocAction }
