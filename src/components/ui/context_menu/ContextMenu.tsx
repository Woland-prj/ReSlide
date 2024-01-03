import { TButtonGroup } from '@/types/context_menu_buttons.type'
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import ButtonGroup from './ButtonGroup'
import styles from './ContextMenu.module.css'
import cn from 'clsx'

type ContextMenuProps = {
  buttonGroups: TButtonGroup[]
  setIsContextMenuOpen: Dispatch<SetStateAction<boolean>>
}
const menuCoords = {
  x = 
}
const ContextMenu: FC<ContextMenuProps> = ({
  buttonGroups,
  setIsContextMenuOpen,
}) => {
  const castileRef = useRef<HTMLDivElement>(null)
  const [isMenuClosing, setIsMenuClosing] = useState<boolean>(false)
  useEffect(() => {
    const toggleFn = () => {
      const closingTimeout: number = 100
      setIsMenuClosing(true)
      setTimeout(() => setIsContextMenuOpen(prev => !prev), closingTimeout)
    }
    castileRef.current?.addEventListener('click', toggleFn)
    return () => castileRef.current?.removeEventListener('click', toggleFn)
  }, [])
  return (
    <>
      <div
        className={cn(
          styles.context_menu_castile,
          isMenuClosing && styles.context_menu_castile_closing,
        )}
        ref={castileRef}
      />
      <div className={styles.context_menu}>
        {buttonGroups?.map(buttonGroup => (
          <ButtonGroup
            buttons={buttonGroup?.buttons}
            key={buttonGroup?.id}
          ></ButtonGroup>
        ))}
      </div>
    </>
  )
}
export default ContextMenu
