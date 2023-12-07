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
    id: 'add_slide_btn',
    iconUrl: new_slide,
  },
  {
    id: 'undo_btn',
    iconUrl: undo,
  },
  {
    id: 'redo_btn',
    iconUrl: redo,
  },
  {
    id: 'select_btn',
    iconUrl: arrow,
  },
  {
    id: 'new_text_btn',
    iconUrl: text,
  },
  {
    id: 'new_image_btn',
    iconUrl: image,
  },
  {
    id: 'new_shape_btn',
    iconUrl: shape,
  },
]
