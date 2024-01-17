import { FC } from 'react'
import styles from './SlidePlaceholder.module.css'

type TSlidePlaceholderProps = {
  text: string
}

const SlidePlaceholder: FC<TSlidePlaceholderProps> = ({ text }) => {
  return (
    <div className={styles.placeholder}>
      <span>{text}</span>
    </div>
  )
}

export default SlidePlaceholder
