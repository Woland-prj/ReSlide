import { TContextButton } from '@/types/menu_buttons.type'
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './SubMenu.module.css'
import { SubMenuButton } from './SubMenuButton'
import cn from 'clsx'

type TSubMenuProps = {
  buttons: TContextButton[]
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const SubMenu: FC<TSubMenuProps> = ({ buttons, setIsMenuOpen }) => {
  const castileRef = useRef<HTMLDivElement>(null)
  const [isMenuClosing, setIsMenuClosing] = useState<boolean>(false)
  useEffect(() => {
    const toggleFn = () => {
      const closingTimeout: number = 100
      setIsMenuClosing(true)
      setTimeout(() => setIsMenuOpen(prev => !prev), closingTimeout)
    }
    castileRef.current?.addEventListener('click', toggleFn)
    return () => castileRef.current?.removeEventListener('click', toggleFn)
  }, [])

  return (
    <>
      <div
        className={cn(
          styles.sub_menu_castile,
          isMenuClosing && styles.sub_menu_castile_closing,
        )}
        ref={castileRef}
      />
      <div className={styles.sub_menu}>
        {buttons.map(button => (
          <SubMenuButton key={button.name} button={button}></SubMenuButton>
        ))}
      </div>
    </>
  )
}

export default SubMenu
