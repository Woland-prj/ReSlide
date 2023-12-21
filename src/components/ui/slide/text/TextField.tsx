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
    const setValue = () => {
      const newValue: string = textBlockRef.current?.innerHTML
        ? textBlockRef.current?.innerHTML
        : 'default'
      changeTextValueAction(text.id, newValue)
    }
  }, [])

  return (
    <div>
      <div
        style={{
          color: text.formatting.color,
          fontSize: text.formatting.fontSize,
          fontFamily: text.formatting.fontFamily,
        }}
        className={styles.textObject}
        ref={textBlockRef}
        suppressContentEditableWarning={true}
        contentEditable={text.isSelected ? 'true' : 'false'}
      >
        {text.value}
      </div>
    </div>
  )
}

export default TextField
