import { TActionsButton } from '@/types/action_buttons.type'
import { FC } from 'react'
import styles from './ActionsMenu.module.css'
import ImageButton from './ImageButton'

type TActionsBlockProps = {
  actions: TActionsButton[]
}

const ActionsBlock: FC<TActionsBlockProps> = ({ actions }) => {
  return (
    <div className={styles.actions_block}>
      {actions.map(action => (
        <ImageButton key={action.id} button={action} />
      ))}
    </div>
  )
}

export default ActionsBlock
