import { useActions } from '@/hooks/useActions'
import { TText } from '@/types/type'
import { FC, useEffect, useRef } from 'react'
import styles from './Text.module.css'

type TTextFieldProps = {
  text: TText
}

const TextField: FC<TTextFieldProps> = ({ text }) => {
  const { changeTextValueAction } = useActions()
  const textBlockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const editFn = (e: Event) => {
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
    textBlockRef.current?.addEventListener('mousedown', editFn)
    if (!text.isSelected)
      return () =>
        textBlockRef.current?.removeEventListener('mousedown', editFn)
  }, [text.isSelected])

  return (
    <div
      className={styles.textObject}
      ref={textBlockRef}
      suppressContentEditableWarning={true}
      contentEditable={text.isSelected ? 'true' : 'false'}
    >
      {text.value}
    </div>
  )
}

export default TextField
