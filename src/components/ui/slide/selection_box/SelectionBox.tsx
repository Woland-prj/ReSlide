import { resizeBlockData } from '@/data/resizes_elements.data'
import { useDnd } from '@/hooks/useDnd'
import { useObjectsStyles } from '@/hooks/useObjectsStyles'
import { useSelection } from '@/hooks/useSelection'
import { TImage, TText, TVector } from '@/types/type'
import cn from 'clsx'
import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import ResizeBlockComp from './ResizeBlock'
import styles from './SelectionBox.module.css'

type TSelectionBoxProps = {
  obj: TText | TVector | TImage
  editable: boolean
}

const SelectionBox: FC<PropsWithChildren<TSelectionBoxProps>> = ({
  children,
  obj,
  editable,
}) => {
  const chStyles = useObjectsStyles(obj)
  const boxRef = useRef<HTMLDivElement>(null)
  const { setSelection, deleteSelection } = useSelection(obj.id)
  const { registerItemFn, unregisterItemFn } = useDnd(obj.id)
  useEffect(() => {
    if (editable) {
      setSelection(boxRef)
      const dndFn = registerItemFn(boxRef)
      return () => {
        unregisterItemFn(boxRef, dndFn)
        deleteSelection(boxRef)
      }
    }
  }, [])
  return (
    <div
      ref={boxRef}
      style={chStyles}
      className={cn(
        styles.box,
        editable && styles.editable_box,
        editable && obj.isSelected ? styles.active_box : null,
      )}
    >
      {editable && obj.isSelected && (
        <ResizeBlockComp
          dots={resizeBlockData}
          objId={obj.id}
          objRef={boxRef}
        ></ResizeBlockComp>
      )}
      {children}
    </div>
  )
}

export default SelectionBox
