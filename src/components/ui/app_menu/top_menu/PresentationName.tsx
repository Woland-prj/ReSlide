import { useActions } from '@/hooks/useActions'
import { useDoc } from '@/hooks/useDoc'
import { brandStr, docInitialName } from '@/store/initial_states.data'
import { FC, useEffect, useRef, useState } from 'react'
import styles from '../TopMenu.module.css'

const PresentationName: FC = () => {
  const { name } = useDoc()
  const [tempName, setTempName] = useState<string>(name)
  const [isTyped, setIsTyped] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { changeDocNameAction } = useActions()

  useEffect(() => {
    document.title = name + brandStr
    setTempName(name)
  }, [name])

  useEffect(() => {
    inputRef.current?.focus()
  })

  const saveName = () => {
    setIsTyped(false)
    const n_name = tempName == '' ? docInitialName : tempName
    changeDocNameAction(n_name)
    document.title = n_name + ' - ReSlide'
  }

  return (
    <>
      {isTyped ? (
        <input
          className={styles.pres_name_input}
          ref={inputRef}
          value={tempName}
          onChange={e => setTempName(e.target.value)}
          onBlur={saveName}
        />
      ) : (
        <h1 className={styles.pres_name_h} onClick={() => setIsTyped(true)}>
          {name}
        </h1>
      )}
    </>
  )
}

export default PresentationName
