import { FC, useState } from 'react'
import styles from './ActionsMenu.module.css'
import { useEditor } from '@/hooks/useEditor'
import { useDoc } from '@/hooks/useDoc'
import { ObjectType } from '@/types/type'
import { useActions } from '@/hooks/useActions'

type TextInputButtonProps = {
  type: string
  placeholder: string
}

export const TextInputButton: FC<TextInputButtonProps> = ({
  type,
  placeholder,
}) => {
  const standardValue = (type: string): string => {
    if (type == 'text') return 'Times New Roman'
    else return '14'
  }
  const { activeSlideId, selectedObjectsIds } = useEditor()
  const { setFontFamilyAction, setFontSizeAction } = useActions()
  const [textValue, setTextValue] = useState(standardValue(type))
  const { slides } = useDoc()

  const saveText = () => {
    if (type == 'number' && parseInt(textValue)) {
      slides[activeSlideId].objects.forEach(obj => {
        if (
          selectedObjectsIds.find(selectedId => selectedId == obj.id) !=
            undefined &&
          obj.type == ObjectType.Vector
        )
          setFontSizeAction(obj.id, parseInt(textValue))
      })
    } else if (type == 'text') {
      slides[activeSlideId].objects.forEach(obj => {
        if (
          selectedObjectsIds.find(selId => selId == obj.id) != undefined &&
          obj.type == ObjectType.Vector
        )
          setFontFamilyAction(obj.id, textValue)
      })
    }
  }
  return (
    <div className={styles.input_button}>
      <div className={styles.image_button}></div>
      <input
        type={type}
        placeholder={placeholder}
        value={textValue}
        onBlur={saveText}
        onChange={e => setTextValue(e.target.value)}
      />
    </div>
  )
}
