import { TActionsButton } from '@/types/action_buttons.type'
import { FC } from 'react'
import ImageButton from './ImageButton'

type TActionsBlockProps = {
  actions: TActionsButton[]
}

const ActionsBlock: FC<TActionsBlockProps> = ({ actions }) => {
  return (
    <div>
      {actions.map(action => (
        <ImageButton key={action.name} button={action} />
      ))}
    </div>
  )
}

export default ActionsBlock
