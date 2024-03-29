import { useActions } from '@/hooks/useActions'
import { useCheckId } from '@/hooks/useCheckId'
import { TText } from '@/types/type'
import cn from 'clsx'
import { FC, useEffect, useRef } from 'react'
import styles from './Text.module.css'

type TTextFieldProps = {
  text: TText
}

const TextField: FC<TTextFieldProps> = ({ text }) => {
  const { changeTextValueAction } = useActions()
  const textBlockRef = useRef<HTMLDivElement>(null)
  const isSelected = useCheckId(text.id)

  useEffect(() => {
    const editFn = (e: Event) => {
      if (isSelected) {
        e.stopPropagation()
        const moveHandler = (e: Event) => e.stopPropagation()
        const upHandler = (e: Event) => {
          e.stopPropagation()
          textBlockRef.current?.removeEventListener('mousemove', moveHandler)
          textBlockRef.current?.removeEventListener('mouseup', upHandler)
        }
        textBlockRef.current?.addEventListener('mousemove', moveHandler)
        textBlockRef.current?.addEventListener('mouseup', upHandler)
      }
    }
    textBlockRef.current?.addEventListener('mousedown', editFn)
    return () => textBlockRef.current?.removeEventListener('mousedown', editFn)
  }, [isSelected])

  const saveValue = () => {
    console.log('save')
    changeTextValueAction(
      text.id,
      textBlockRef.current?.innerText &&
        textBlockRef.current?.innerText.length != 1
        ? textBlockRef.current?.innerText
        : 'Введите текст',
    )
  }

  return (
    <div
      className={cn(styles.text_object, isSelected && styles.active_text)}
      ref={textBlockRef}
      suppressContentEditableWarning={true}
      contentEditable={isSelected ? 'true' : 'false'}
      tabIndex={0}
      onBlur={saveValue}
    >
      {text.value}
    </div>
  )
}

export default TextField
