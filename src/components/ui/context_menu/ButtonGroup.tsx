import { FC } from 'react'
import TextButton from './ContextMenuButton'

const ButtonList: FC = () => {
  return (
    <div>
      {buttons.map(button => (
        <TextButton button={button}></TextButton>
      ))}
    </div>
  )
}
