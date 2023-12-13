import { useEffect, useRef } from 'react'
import { useActions } from '@/hooks/useActions'
import { saveJsonObjToFile } from '@/services/save_doc.service'
import { useDoc } from '@/hooks/useDoc'
import { TDocument } from '@/types/type'
import { readJSONFile } from '@/services/upload_doc.service'
import { useEditor } from '@/hooks/useEditor'

// По имени назначает функцию, соответствующую имени кнопки, кнопке для вызова по клику
export const useButtonAction = (btnId: string) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { name, size, slides } = useDoc()
  const { addSlideAction, loadDocAction, addTextAction } = useActions()
  const { active_slide_id } = useEditor()

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

  const exportDocFn = () => {
    const savedDoc: TDocument = {
      name: name,
      size: size,
      slides: slides,
    }
    saveJsonObjToFile(savedDoc, savedDoc.name)
  }

  useEffect(() => {
    let onClick = (e: Event) => alert(`Возникли проблемы с кнопкой ${btnId}`)
    switch (btnId) {
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
        onClick = addSlideAction
        break
      case 'new_text_btn':
        onClick = () => {
          console.log(active_slide_id)
          addTextAction(active_slide_id)
        }
        break
    }
    buttonRef.current?.addEventListener('click', onClick)
    return () => buttonRef.current?.removeEventListener('click', onClick)
  }, [])
  return buttonRef
}
