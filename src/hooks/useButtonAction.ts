import { useActions } from '@/hooks/useActions'
import { useDoc } from '@/hooks/useDoc'
import { useEditor } from '@/hooks/useEditor'
import { imageToBase64 } from '@/services/image_encode.service'
import { saveJsonObjToFile } from '@/services/save_doc.service'
import { readJSONFile } from '@/services/upload_doc.service'
import { ShapeVariation, TDocument } from '@/types/type'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

// По имени назначает функцию, соответствующую имени кнопки, кнопке для вызова по клику
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
  } = useActions()
  const { activeSlideId, globalSlideId, globalObjectId } = useEditor()

  const openDocFn = () => {
    const input: HTMLInputElement = document.createElement('input')
    input.type = 'file'
    const loadFn = (e: Event) => {
      const filePromise = readJSONFile(e)
      filePromise.then(loadedDoc => {
        console.log(loadedDoc)
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

  useEffect(() => {
    let onClick = (e: Event) => alert(`Возникли проблемы с кнопкой ${btnId}`)
    switch (btnId) {
      case 'log_btn':
        onClick = () => console.log('Document model:', name, size, slides)
        break
      case 'create_btn':
        onClick = () => console.log('create button')
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
    }
    buttonRef.current?.addEventListener('click', onClick)
    return () => buttonRef.current?.removeEventListener('click', onClick)
  }, [activeSlideId, globalObjectId, globalSlideId])
  return buttonRef
}
