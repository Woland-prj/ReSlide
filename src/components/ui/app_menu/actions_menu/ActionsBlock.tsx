import { TActionsButton } from '@/types/action_buttons.type'
import { FC } from 'react'
import ImageButton from './ImageButton'
import styles from './ActionsMenu.module.css'

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
