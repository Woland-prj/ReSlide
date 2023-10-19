import { baseActions } from '@/data/actions_menu_buttons.data'
import { FC } from 'react'
import ActionsBlock from './ActionsBlock'

const ActionsMenu: FC = () => {
  return (
    <div>
      <ActionsBlock actions={baseActions} />
      {/* <BaseActions />
        <ChangedActions /> */}
    </div>
  )
}

export default ActionsMenu
