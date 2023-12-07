import { useEffect, useRef } from 'react'
import { buttonFunctions } from '@/services/button_functions.service'
import { useActions } from '@/hooks/useActions'

type TSubscription = {
  element: HTMLDivElement
  subscribers: ((e: MouseEvent) => void)[]
}
// По имени назначает функцию, соответствующую имени кнопки, кнопке для вызова по клику
export const useButtonAction = (name: string) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const { addSlideAction } = useActions()
  useEffect(() => {
    let onClick = () => alert('Возникли проблемы с кнопкой')
    switch (name) {
      case 'Создать':
        onClick = buttonFunctions.createDoc
        break
      case 'Открыть':
        onClick = buttonFunctions.openDoc
        break
      case 'Экспортировать':
        onClick = buttonFunctions.saveDoc
        break
      case 'new slide':
        onClick = addSlideAction
        break
    }
    buttonRef.current?.addEventListener('click', onClick)
    return () => buttonRef.current?.removeEventListener('click', onClick)
  }, [])
  return buttonRef
}
