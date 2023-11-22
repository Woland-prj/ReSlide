import { baseActions } from '@/data/actions_menu_buttons.data'
import { FC } from 'react'
import ActionsBlock from './ActionsBlock'
import { BaseActions } from './BaseActions'

const ActionsMenu: FC = () => {
  return (
    <div>
      <ActionsBlock actions={baseActions} />
      <BaseActions />
      {/* Не понял, чем эти два блока отличаются друг от друга. Сейчас из-за них кнопки двоятся */}
      {/* <ChangedActions /> */}
    </div>
  )
}

export default ActionsMenu
