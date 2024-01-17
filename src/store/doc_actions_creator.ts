import {
  FormatVariation,
  ObjectPartVariation,
  ShapeVariation,
  TCoords,
  TDocument,
  TSize,
} from '@/types/type'

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
  DELETE_OBJECT_ACTION = 'DELETE_OBJECT_ACTION',
  SET_OBJECT_COLOR = 'SET_OBJECT_COLOR',
  TOGGLE_FORMATTING = 'TOGGLE_FORMATTING',
  SET_FONT_FAMILY = 'SET_FONT_FAMILY',
  SET_FONT_SIZE = 'SET_FONT_SIZE',
  SET_FONT_COLOR = 'SET_FONT_COLOR',
  DUPLICATE_SLIDE_ACTION = 'DUPLICATE_SLIDE_ACTION',
  DELETE_SLIDE_ACTION = 'DELETE_SLIDE_ACTION',
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

type TDeleteObjectAction = {
  type: DocActions.DELETE_OBJECT_ACTION
  payload: {
    objectId: number
  }
}

type TSetObjectColor = {
  type: DocActions.SET_OBJECT_COLOR
  payload: {
    objectId: number
    color: string
    objectPart: ObjectPartVariation
  }
}

type TSetFontColor = {
  type: DocActions.SET_FONT_COLOR
  payload: {
    objectId: number
    fontColor: string
  }
}

type TToggleFormatting = {
  type: DocActions.TOGGLE_FORMATTING
  payload: {
    objectId: number
    variation: FormatVariation
  }
}

type TSetFontFamily = {
  type: DocActions.SET_FONT_FAMILY
  payload: {
    objectId: number
    fontFamily: string
  }
}

type TSetFontSize = {
  type: DocActions.SET_FONT_SIZE
  payload: {
    objectId: number
    fontSize: number
  }
}

type TDuplicateSlideAction = {
  type: DocActions.DUPLICATE_SLIDE_ACTION
  payload: {
    slideId: number
    newId: number
    objId: number
    objCount: number
  }
}

type TDeleteSlideAction = {
  type: DocActions.DELETE_SLIDE_ACTION
  payload: {
    slideId: number
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
  | TDeleteObjectAction
  | TSetObjectColor
  | TToggleFormatting
  | TSetFontFamily
  | TSetFontSize
  | TSetFontColor
  | TDuplicateSlideAction
  | TDeleteSlideAction

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
  changeObjectSizeAction: (
    objectID: number,
    w: number,
    h: number,
  ): TDocAction => {
    return {
      type: DocActions.CHANGE_OBJECT_SIZE,
      payload: {
        objectId: objectID,
        size: {
          width: w,
          height: h,
        },
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
  deleteObjectAction: (objectID: number): TDocAction => {
    return {
      type: DocActions.DELETE_OBJECT_ACTION,
      payload: {
        objectId: objectID,
      },
    }
  },
  setObjectColorAction: (
    objectID: number,
    color: string,
    objectPart: ObjectPartVariation,
  ): TDocAction => {
    return {
      type: DocActions.SET_OBJECT_COLOR,
      payload: {
        objectId: objectID,
        color: color,
        objectPart: objectPart,
      },
    }
  },
  toggleFormattingAction: (
    objectID: number,
    variation: FormatVariation,
  ): TDocAction => {
    return {
      type: DocActions.TOGGLE_FORMATTING,
      payload: {
        objectId: objectID,
        variation: variation,
      },
    }
  },
  setFontFamilyAction: (objectID: number, fontFamily: string): TDocAction => {
    return {
      type: DocActions.SET_FONT_FAMILY,
      payload: {
        objectId: objectID,
        fontFamily: fontFamily,
      },
    }
  },
  setFontSizeAction: (objectID: number, size: number): TDocAction => {
    return {
      type: DocActions.SET_FONT_SIZE,
      payload: {
        objectId: objectID,
        fontSize: size,
      },
    }
  },
  setFontColorAction: (objectID: number, color: string): TDocAction => {
    return {
      type: DocActions.SET_FONT_COLOR,
      payload: {
        objectId: objectID,
        fontColor: color,
      },
    }
  },
  duplicateSlideAction: (
    slideID: number,
    newID: number,
    objID: number,
    objCount: number,
  ): TDocAction => {
    return {
      type: DocActions.DUPLICATE_SLIDE_ACTION,
      payload: {
        slideId: slideID,
        newId: newID,
        objId: objID,
        objCount: objCount,
      },
    }
  },
  deleteSlideAction: (slideID: number): TDocAction => {
    return {
      type: DocActions.DELETE_SLIDE_ACTION,
      payload: {
        slideId: slideID,
      },
    }
  },
}

export { DocActions, createDocActions }
export type { TDocAction }
