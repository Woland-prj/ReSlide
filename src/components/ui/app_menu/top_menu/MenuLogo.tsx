import logo from '@/static/images/logo.svg'
import { FC } from 'react'
import styles from '../TopMenu.module.css'

const MenuLogo: FC = () => {
  return (
    <a href='/' className={styles.logo}>
      <img src={logo} alt='logo' />
    </a>
  )
}

export default MenuLogo
