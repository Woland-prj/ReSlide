// TODO: Функционал контекстной кнопки
export type TContextButton = {
  name: string
}

export type TMenuButton = {
  name: string
  contextButtons: TContextButton[]
}
