import React from 'react'
import { ButtonProps } from 'components/ButtonProps'

type ImageButtonProps = ButtonProps & {
  text: string
}
export function ImageButton(props: ImageButtonProps) {
  return
  ;<button onClick={props.onClick} onMouseEnter={props.hover}>
    {props.text}
  </button>
}
