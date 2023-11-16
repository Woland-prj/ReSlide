import { TActionsButton } from '@/types/action_buttons.type'
import { FC } from 'react'
import ImageButton from './ImageButton'

export type TActionsBlock = {
  actions: TActionsButton[]
}

const ActionsBlock: FC<TActionsBlock> = ({ actions }) => {
  return (
    <div>
      {actions.map(action => (
        <ImageButton
          key={action.name}
          hover={() => console.log(`${action.name} hover`)}
          onClick={() => console.log(`${action.name} click`)}
          image_url={action.iconUrl}
          alt={action.name}
        />
      ))}
    </div>
  )
}

export default ActionsBlock
