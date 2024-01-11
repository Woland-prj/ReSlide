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
import { TCoords } from '@/types/type'

type ContextMenuProps = {
  coords: TCoords
  buttonGroups: TButtonGroup[]
  setIsContextMenuOpen: Dispatch<SetStateAction<boolean>>
}

const ContextMenu: FC<ContextMenuProps> = ({
  buttonGroups,
  setIsContextMenuOpen,
  coords,
}) => {
  const ref_context_menu = useRef<HTMLDivElement>(null)
  const castileRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    ref_context_menu.current!.style.left = coords.x.toString() + 'px'
    ref_context_menu.current!.style.top = coords.y.toString() + 'px'
    const toggleFn = () => {
      console.log('toggleContext')
      const closingTimeout: number = 100
      setIsMenuOpen(false)
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
          isMenuOpen && styles.context_menu_castile_closing,
        )}
        ref={castileRef}
      />
      <div className={styles.context_menu} ref={ref_context_menu}>
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
