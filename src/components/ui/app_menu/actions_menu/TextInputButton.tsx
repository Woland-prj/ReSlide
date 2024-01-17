import { FC, useState } from 'react'
import styles from './ActionsMenu.module.css'
import { useEditor } from '@/hooks/useEditor'

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
  const {setFontSize} = useAction()
  const {activeSlideId} = useEditor()
  const [textValue, setTextValue] = useState(standardValue(type))
  const saveText = () => {
    if (type == 'number' && parseInt(textValue) != undefined) {
      slides[activeSlideId].objects.forEach(obj => {
        if (
          selectedObjectsIds.find(selId => selId === obj.id) != undefined &&
          obj.type === ObjectType.Vector
        )
          setObjectColorAction(obj.id, textValue, type)
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
        onChange={() => setTextValue}
      />
    </div>
  )
}
