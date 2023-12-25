import { useActions } from '@/hooks/useActions'
import useDnd from '@/hooks/useDnd'
import useSelection from '@/hooks/useSelection'
import { useStyles } from '@/hooks/useStyles'
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
  const changeStyles = (object: TText): React.CSSProperties => {
    return {
      left: object.coords.x,
      top: object.coords.y,
      transform: `rotate(${object.rotationAngle}deg)`,
      color: object.formatting.color,
      fontSize: object.formatting.fontSize,
      fontFamily: object.formatting.fontFamily,
      width: object.size.width,
      height: object.size.height,
    }
  }

  const params = [text.coords, text.formatting, text.rotationAngle, text.size]
  const chStyles = useStyles(params, text, changeStyles)

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

  return (
    <div ref={boxRef} style={chStyles} className={styles.box}>
      <div
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
