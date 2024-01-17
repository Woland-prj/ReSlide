import { ButtonType, TActionsButton } from '@/types/action_buttons.type'
import { FC } from 'react'
import styles from './ActionsMenu.module.css'
import { ColorInputButton } from './ColorInputButton'
import ImageButton from './ImageButton'
import { TextInputButton } from './TextInputButton'

type TActionsBlockProps = {
  actions: TActionsButton[]
}

type TSelectProps = {
  action: TActionsButton
}

const SelectNodeComp: FC<TSelectProps> = ({ action }) => {
  return (
    (action.type === ButtonType.IMAGE_BUTTON && (
      <ImageButton key={action.id} button={action} />
    )) ||
    (action.type === ButtonType.COLOR_INPUT_BUTTON && (
      <ColorInputButton id={action.id} />
    )) ||
    (action.type == ButtonType.SIZE_INPUT_BUTTON && (
      <TextInputButton
        type='number'
        placeholder='Введите размер шрифта'
      ></TextInputButton>
    )) || <div>lol</div>
  )
}

const ActionsBlock: FC<TActionsBlockProps> = ({ actions }) => {
  return (
    <div className={styles.actions_block}>
      {actions.map(action => (
        <SelectNodeComp action={action} key={action.id} />
      ))}
    </div>
  )
}

export default ActionsBlock
// <ImageButton key={action.id} button={action} />
