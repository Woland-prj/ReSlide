import { useEffect, useRef } from 'react'

type TSubscription = {
  element: HTMLDivElement
  subscribers: ((e: MouseEvent) => void)[]
}

export const useButtonAction = (name: string) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const onClick = () => {
      console.log('lol')
      switch (name) {
        case 'Создать':
          console.log('Создание')
          break
        case 'Открыть':
          console.log('Открытие')
          break
        case 'Экспортировать':
          console.log('Экспорт документа')
          break
        default:
          console.log('Ничего нет')
          break
      }
    }
    buttonRef.current?.addEventListener('mousedown', onClick)
    return () => buttonRef.current?.removeEventListener('mousedown', onClick)
  }, [])
  return buttonRef
}
