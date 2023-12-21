import { TSize, TText } from '@/types/type'
import { FC, useEffect, useRef, useState } from 'react'
import { useActions } from '@/hooks/useActions'
import styles from './Text.module.css'

type TTextFieldProps = {
  text: TText
}

const TextField: FC<TTextFieldProps> = ({ text }) => {
  return (
    <div>
      <div
        style={{
          color: text.formatting.color,
          fontSize: text.formatting.fontSize,
          fontFamily: text.formatting.fontFamily,
        }}
        className={styles.textObject}
        suppressContentEditableWarning={true}
        contentEditable={text.isSelected ? 'true' : 'false'}
      >
        {text.value}
      </div>
    </div>
  )
}

export default TextField
