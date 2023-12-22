import { useActions } from '@/hooks/useActions'
import useDnd from '@/hooks/useDnd'
import useSelection from '@/hooks/useSelection'
import { TText } from '@/types/type'
import { FC, RefObject, useEffect, useRef } from 'react'
import styles from './Text.module.css'

type TTextFieldProps = {
  text: TText
  slideRef: RefObject<HTMLDivElement>
  editable: boolean
}

const TextField: FC<TTextFieldProps> = ({ text, slideRef, editable }) => {
  const { changeTextValueAction } = useActions()
  const textBlockRef = useRef<HTMLDivElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const { setSelection, deleteSelection } = useSelection(text.id)
  const { registerItemFn, unregisterItemFn } = useDnd(text.id)

  useEffect(() => {
    if (editable) {
      const dndFn = registerItemFn(boxRef, slideRef)
      const selectFn = setSelection(boxRef)
      // objRef.current?.addEventListener('click', e =>
      //   e.stopImmediatePropagation(),
      // )
      return () => {
        unregisterItemFn(boxRef, dndFn)
        deleteSelection(boxRef, selectFn)
      }
    }
  }, [])
  // useEffect(() => {
  //   const setValue = () => {
  //     const newValue: string = textBlockRef.current?.innerHTML
  //       ? textBlockRef.current?.innerHTML
  //       : 'default'
  //     changeTextValueAction(text.id, newValue)
  //   }
  // }, [])

  return (
    <div ref={boxRef}>
      <div
        style={{
          color: text.formatting.color,
          fontSize: text.formatting.fontSize,
          fontFamily: text.formatting.fontFamily,
          width: text.size.width,
          height: text.size.height,
        }}
        className={styles.textObject}
        ref={textBlockRef}
        // suppressContentEditableWarning={true}
        // contentEditable={text.isSelected ? 'true' : 'false'}
      >
        {text.value}
      </div>
    </div>
  )
}

export default TextField
