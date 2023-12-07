import { useEffect, useRef } from 'react'
import { buttonFunctions } from '@/services/button_functions.service'
import { useActions } from '@/hooks/useActions'
import { saveJsonObjToFile } from '@/services/save_doc.service'
import { useDoc } from '@/hooks/useDoc'
import { TDocument } from '@/types/type'
import { readJSONFile } from '@/services/upload_doc.service'

type TSubscription = {
  element: HTMLDivElement
  subscribers: ((e: MouseEvent) => void)[]
}
// По имени назначает функцию, соответствующую имени кнопки, кнопке для вызова по клику
export const useButtonAction = (btnId: string) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { name, size, slides } = useDoc()

  const { addSlideAction } = useActions()
  useEffect(() => {
    let onClick = (e: Event) => alert(`Возникли проблемы с кнопкой ${btnId}`)
    switch (btnId) {
      case 'create_btn':
        onClick = buttonFunctions.createDoc
        break
      case 'open_btn':
        onClick = (e: Event) => {
          const input: HTMLInputElement = document.createElement('input')
          input.name = 'openInput'
          input.type = 'file'
          input.click()
          const openedFile = readJSONFile(e)
        }
        break
      case 'export_btn':
        onClick = () => {
          const savedDoc: TDocument = {
            name: name,
            size: size,
            slides: slides,
          }
          saveJsonObjToFile(savedDoc, savedDoc.name)
        }
        break
      case 'add_slide_btn':
        onClick = addSlideAction
        break
    }
    buttonRef.current?.addEventListener('click', onClick)
    return () => buttonRef.current?.removeEventListener('click', onClick)
  }, [])
  return buttonRef
}
