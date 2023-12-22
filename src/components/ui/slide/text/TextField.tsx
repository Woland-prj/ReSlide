import { useActions } from '@/hooks/useActions'
import useDnd from '@/hooks/useDnd'
import useSelection from '@/hooks/useSelection'
import { TText } from '@/types/type'
import { FC, useEffect, useRef } from 'react'
import styles from './Text.module.css'

type TTextFieldProps = {
  text: TText
  editable: boolean
}

const TextField: FC<TTextFieldProps> = ({ text, editable }) => {
  const { changeTextValueAction } = useActions()
  const textBlockRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const objRef = useRef<HTMLDivElement>(null)
  const { setSelection, deleteSelection } = useSelection(text.id)
  const { registerItemFn, unregisterItemFn } = useDnd(text.id)

  useEffect(() => {
    if (editable) {
      const dndFn = registerItemFn({ elementRef: boxRef })
      const selectFn = setSelection(boxRef)
      objRef.current?.addEventListener('click', e =>
        e.stopImmediatePropagation(),
      )
      return () => {
        unregisterItemFn(index, dndFn)
        deleteSelection(boxRef, selectFn)
      }
    }
  }, [])
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
