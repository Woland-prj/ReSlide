import { TContextButton } from './menu_buttons.type'

export const enum ButtonType {
  COLOR_INPUT_BUTTON = 'COLOR_INPUT_BUTTON',
  SIZE_INPUT_BUTTON = 'TEXT_INPUT_BUTTON',
  IMAGE_BUTTON = 'IMAGE_BUTTON',
}

export type TActionsButton = {
  id: string
  name: string
  iconUrl: string
  contextMenu: TContextButton[] | null
  type: ButtonType
}
