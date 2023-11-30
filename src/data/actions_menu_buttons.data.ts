import { TActionsButton } from '@/types/action_buttons.type'
import arrow from '@/static/images/arrow.svg'
import new_slide from '@/static/images/new_slide.svg'
import shape from '@/static/images/shape.svg'
import text from '@/static/images/text.svg'
import image from '@/static/images/image.svg'
import undo from '@/static/images/undo.svg'
import redo from '@/static/images/redo.svg'

export const baseActions: TActionsButton[] = [
  {
    name: 'new slide',
    iconUrl: new_slide,
  },
  {
    name: 'undo',
    iconUrl: undo,
  },
  {
    name: 'redo',
    iconUrl: redo,
  },
  {
    name: 'select',
    iconUrl: arrow,
  },
  {
    name: 'new text',
    iconUrl: text,
  },
  {
    name: 'new image',
    iconUrl: image,
  },
  {
    name: 'new shape',
    iconUrl: shape,
  },
]
