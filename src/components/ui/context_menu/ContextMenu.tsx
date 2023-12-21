import { TButtonGroup } from '@/types/context_menu_buttons.type'
import { FC } from 'react'
import ButtonGroup from './ButtonGroup'
import styles from './ContextMenu.module.css'

type ContextMenuProps = {
  buttonGroups: TButtonGroup[]
}
const ContextMenu: FC<ContextMenuProps> = ({ buttonGroups }) => {
  return (
    <div className={styles.context_menu}>
      {buttonGroups.map(buttonGroup => (
        <ButtonGroup
          buttons={buttonGroup.buttons}
          key={buttonGroup.id}
        ></ButtonGroup>
      ))}
    </div>
  )
}
export default ContextMenu
