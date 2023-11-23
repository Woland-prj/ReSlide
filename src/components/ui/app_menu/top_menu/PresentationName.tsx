import { useDoc } from '@/hooks/useDoc'
import { FC } from 'react'
import styles from '../TopMenu.module.css'

const PresentationName: FC = () => {
  const { name } = useDoc()
  return <h1 className={styles.pres_name}>{name}</h1>
}

export default PresentationName
