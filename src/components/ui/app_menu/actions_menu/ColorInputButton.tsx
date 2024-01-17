import { useActions } from '@/hooks/useActions'
import { useDoc } from '@/hooks/useDoc'
import { useEditor } from '@/hooks/useEditor'
import { ObjectPartVariation, ObjectType } from '@/types/type'
import { FC, useRef, useState } from 'react'

type ColorInputButtonProps = {
  type: ObjectPartVariation
  id: string
}

const re = new RegExp(/^#[0-9a-fA-F]/)

export const ColorInputButton: FC<ColorInputButtonProps> = ({ type, id }) => {
  const colorInputRef = useRef<HTMLInputElement>(null)
  const [colorValue, setColorValue] = useState<string>('#000000')
  const { setObjectColorAction } = useActions()
  const { selectedObjectsIds, activeSlideId } = useEditor()
  const { slides } = useDoc()

  const saveColor = () => {
    if (re.test(colorValue)) {
      slides[activeSlideId].objects.forEach(obj => {
        if (
          selectedObjectsIds.find(selId => selId === obj.id) != undefined &&
          obj.type === ObjectType.Vector
        )
          setObjectColorAction(obj.id, colorValue, type)
      })
    }
  }
  return (
    <div>
      <input
        type='color'
        name='message'
        ref={colorInputRef}
        value={colorValue}
        onBlur={saveColor}
        onChange={() => setColorValue}
      />
    </div>
  )
}
