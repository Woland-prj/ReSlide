import React from 'react'
import { ButtonProps } from 'components/ButtonProps'
//TODO: Я не знаю как этому элементу дать картинку по url. Надо разобраться позже

type ImageButtonProps = ButtonProps & {
  image_url: string
}
export function ImageButton(props: ImageButtonProps) {
  return
  ;<button
    onClick={props.onClick}
    onMouseEnter={props.hover}
    className='ImageButton'
  ></button>
}
