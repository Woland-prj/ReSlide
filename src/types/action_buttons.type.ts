import { TContextButton } from './menu_buttons.type'

export type TActionsButton = {
  id: string
  name: string
  iconUrl: string
  contextMenu: TContextButton[] | null
}
