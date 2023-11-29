import { useRef } from 'react'

type TSubscription = {
  element: HTMLDivElement
  subscribers: ((e: MouseEvent) => void)[]
}

export const useButtonAction = (name: string) => {
  const buttonRef = useRef<HTMLDivElement>(null)
  const onClick = (e: MouseEvent) => {
    switch (name) {
      case 'Открыть':
        buttonRef.current?.addEventListener('mousedown', e => {
          console.log('Открытие документа')
        })
        break
      case 'Экспортировать':
        buttonRef.current?.addEventListener('mousedown', e => {
          console.log('Экспорт документа')
        })
        break
      default:
        console.log('Ничего нет')
        break
    }
  }

  return buttonRef
}
