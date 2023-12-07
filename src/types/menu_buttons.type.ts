// TODO: Функционал контекстной кнопки
export type TContextButton = {
  id: string
  name: string
}

export type TMenuButton = {
  name: string
  contextButtons: TContextButton[]
}
