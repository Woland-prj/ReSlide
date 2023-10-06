import React from 'react'
import { ButtonProps } from 'components/ButtonProps'

type TextButtonProps = ButtonProps & {
  text: string
}
export function TextButton(props: TextButtonProps) {
  return
  ;<button
    onClick={props.onClick}
    onMouseEnter={props.hover}
    className='TextButton'
  >
    {props.text}
  </button>
}
