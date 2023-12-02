import { useDoc } from '@/hooks/useDoc'
import { FC, useEffect, useRef, useState } from 'react'
import styles from '../TopMenu.module.css'
import { useActions } from '@/hooks/useActions'
import { docInitialName } from '@/store/initial_states.data'

const PresentationName: FC = () => {
  const { name } = useDoc()
  const [tempName, setTempName] = useState<string>(docInitialName)
  const [isTyped, setIsTyped] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { changeDocName } = useActions()

  useEffect(() => {
    inputRef.current?.focus()
  })

  const saveName = () => {
    setIsTyped(false)
    changeDocName({
      name: tempName == '' ? docInitialName : tempName,
    })
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
