import { useButtonAction } from '@/hooks/useButtonAction'
import { FC } from 'react'
import styles from './SlideShowButton.module.css'

type TSlideShowButtonProps = {
  text: string
}

const SlideShowButton: FC<TSlideShowButtonProps> = ({ text }) => {
  const btnRef = useButtonAction('slide_show_btn')
  return (
    <button className={styles.button} ref={btnRef}>
      {text}
    </button>
  )
}

export default SlideShowButton
