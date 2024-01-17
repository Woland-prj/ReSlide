import { FC, useState } from 'react'
import styles from './ActionsMenu.module.css'

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
  const [textValue, setTextValue] = useState(standardValue(type))
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
