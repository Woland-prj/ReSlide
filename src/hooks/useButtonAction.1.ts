import { useActions } from '@/hooks/useActions'
import { useDoc } from '@/hooks/useDoc'
import { useEditor } from '@/hooks/useEditor'
import { getIndexById } from '@/services/getIndexById.service'
import { imageToBase64 } from '@/services/image_encode.service'
import { saveJsonObjToFile } from '@/services/save_doc.service'
import { readJSONFile } from '@/services/upload_doc.service'
import {
  brandStr,
  docInitialState,
  rewriteConfirmQuestion,
} from '@/store/initial_states.data'
import {
  AppMode,
  FormatVariation,
  ObjectPartVariation,
  ShapeVariation,
  TDocument,
  TSlide,
} from '@/types/type'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

// По имени назначает функцию, соответствующую имени кнопки, кнопке для вызова ее же по клику

export const useButtonAction = (
  btnId: string,
  menuCallback: Dispatch<SetStateAction<boolean>> | null = null,
) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { name, size, slides } = useDoc()
  const {
    addSlideAction,
    loadDocAction,
    addTextAction,
    generateIdAction,
    addShapeAction,
    addImageAction,
    setAppModeAction,
    setObjectColorAction,
    setFontFamilyAction,
    setFontSizeAction,
    toggleFormattingAction,
    setFontColorAction,
    duplicateSlideAction,
    deleteSlideAction,
    setActiveSlideAction,
    setGlobalIdAction,
  } = useActions()
  const { activeSlideId, globalSlideId, globalObjectId, appMode } = useEditor()

  const openDocFn = () => {
    if (confirm(rewriteConfirmQuestion)) {
      const input: HTMLInputElement = document.createElement('input')
      input.type = 'file'
      const loadFn = (e: Event) => {
        const filePromise = readJSONFile(e)
        filePromise.then(loadedDoc => {
          console.log(loadedDoc)
          document.title = loadedDoc.name + brandStr
          const slIds: number[] = []
          loadedDoc.slides.forEach(slide => slIds.push(slide.id))
          const objIds: number[] = []
          loadedDoc.slides.forEach(slide =>
            slide.objects.forEach(object => objIds.push(object.id)),
          )
          setGlobalIdAction(Math.max(...slIds) + 1, 'slideId')
          setGlobalIdAction(Math.max(...objIds) + 1, 'objectId')
          loadDocAction(loadedDoc)
        })
        filePromise.finally(() => {
          input.removeEventListener('change', loadFn)
          input.remove()
        })
      }
      input.addEventListener('change', loadFn)
      input.click()
    }
  }

  const loadImageFn = () => {
    generateIdAction('objectId')
    const input: HTMLInputElement = document.createElement('input')
    input.type = 'file'
    const loadFn = (e: Event) => {
      const filePromise = imageToBase64(e)
      filePromise.then(loadedImg => {
        if (loadedImg.name) {
          addImageAction(
            globalObjectId,
            activeSlideId,
            loadedImg.data,
            loadedImg.name,
            loadedImg.size,
          )
        }
      })
      filePromise.finally(() => {
        input.removeEventListener('change', loadFn)
        input.remove()
      })
    }
    input.addEventListener('change', loadFn)
    input.click()
  }

  const exportDocFn = () => {
    const savedDoc: TDocument = {
      name: name,
      size: size,
      slides: slides,
    }
    saveJsonObjToFile(savedDoc, savedDoc.name)
  }

  const generateFnByShape = (shape: ShapeVariation) => {
    return () => {
      console.log(globalSlideId)
      generateIdAction('objectId')
      console.log(globalSlideId)
      addShapeAction(globalObjectId, activeSlideId, shape)
    }
  }

  const toggleFormatParameterByName = (formatName: FormatVariation) => {
    console.log(globalSlideId)
    generateIdAction('objectId')
    console.log(globalSlideId)
    toggleFormattingAction(globalObjectId, formatName)
  }

  const changeTextSize = (size: number) => {
    console.log(globalSlideId)
    generateIdAction('objectId')
    console.log(globalSlideId)
    setFontSizeAction(globalObjectId, size)
  }

  const changeTextFontFamily = (fontFamily: string) => {
    console.log(globalSlideId)
    generateIdAction('objectId')
    console.log(globalSlideId)
    setFontFamilyAction(globalObjectId, fontFamily)
  }
  const changeTextColor = (fontColor: string) => {
    console.log(globalSlideId)
    generateIdAction('objectId')
    console.log(globalSlideId)
    setFontColorAction(globalObjectId, fontColor)
  }

  const changeObjectColor = (
    color: string,
    objectPart: ObjectPartVariation,
  ) => {
    console.log(globalSlideId)
    generateIdAction('objectId')
    console.log(globalSlideId)
    setObjectColorAction(globalObjectId, color, objectPart)
  }

  useEffect(() => {
    let onClick = () => alert(`Возникли проблемы с кнопкой ${btnId}`)
    switch (btnId) {
      case 'log_btn':
        onClick = () => console.log(name, size, slides)
        break
      case 'slide_show_btn':
        onClick = () =>
          setAppModeAction(
            appMode === AppMode.EDIT_MODE
              ? AppMode.VIEW_MODE
              : AppMode.EDIT_MODE,
          )
        break
      case 'create_btn':
        onClick = () => {
          if (confirm(rewriteConfirmQuestion)) {
            setGlobalIdAction(0, 'objectId')
            setGlobalIdAction(0, 'slideId')
            setActiveSlideAction(0)
            loadDocAction(docInitialState)
          }
        }
        break
      case 'open_btn':
        onClick = openDocFn
        break
      case 'export_btn':
        onClick = exportDocFn
        break
      case 'add_slide_btn':
        onClick = () => {
          generateIdAction('slideId')
          addSlideAction(globalSlideId + 1)
        }
        break
      case 'new_text_btn':
        onClick = () => {
          generateIdAction('objectId')
          addTextAction(globalObjectId, activeSlideId)
        }
        break
      case 'new_shape_btn': {
        onClick = () => {
          if (menuCallback) menuCallback(prev => !prev)
        }
        break
      }
      case 'new_ellipse_btn':
        onClick = generateFnByShape(ShapeVariation.Ellipse)
        break
      case 'new_rect_btn':
        onClick = generateFnByShape(ShapeVariation.Rectangle)
        break
      case 'new_triangle_btn':
        onClick = generateFnByShape(ShapeVariation.Triangle)
        break
      case 'new_image_btn':
        onClick = loadImageFn
        break
      case 'italic_btn':
        onClick = () => toggleFormatParameterByName(FormatVariation.Italic)
        break
      case 'bold_btn':
        onClick = () => toggleFormatParameterByName(FormatVariation.Bold)
        break
      case 'underline_btn':
        onClick = () => toggleFormatParameterByName(FormatVariation.Underline)
        break
      case 'strikethrough_btn':
        onClick = () =>
          toggleFormatParameterByName(FormatVariation.Strikethrough)
        break
      case 'text_color_btn':
        onClick = () => changeTextColor(fontColor)
        break
      case 'size_btn':
        onClick = () => changeTextSize(size)
        break
      case 'font_family_btn':
        onClick = () => changeTextFontFamily(fontFamily)
        break
      case 'vector_stroke_color_btn':
        onClick = () => changeObjectColor(color, ObjectPartVariation.Stroke)
        break
      case 'vector_background_color_btn':
        onClick = () => changeObjectColor(color, ObjectPartVariation.Background)
        break
      case 'duplicate_slide_btn':
        onClick = () => {
          generateIdAction('slideId')
          slides[activeSlideId].objects.forEach(() =>
            generateIdAction('objectId'),
          )
          deleteSlideAction(
            activeSlideId,
            globalSlideId + 1,
            globalObjectId,
            slides[activeSlideId].objects.length,
          )
        }
        break
      case 'delete_slide_btn':
        onClick = () => {
          const activeSlideIndex = getIndexById<TSlide>(slides, activeSlideId)
          deleteSlideAction(activeSlideId)
          if (activeSlideIndex)
            setActiveSlideAction(
              activeSlideIndex != 0 ? slides[activeSlideIndex - 1].id : -1,
            )
        }
        break
      case 'fullscreen_btn':
        onClick = () => {
          document.documentElement.requestFullscreen()
        }
        break
      default:
        onClick = () => alert(`Возникли проблемы с кнопкой ${btnId}`)
    }
    buttonRef.current?.addEventListener('click', onClick)
    return () => buttonRef.current?.removeEventListener('click', onClick)
  }, [activeSlideId, globalObjectId, globalSlideId, name])
  return buttonRef
}
