import arrow from '@/static/images/arrow.svg'
import image from '@/static/images/image.svg'
import log from '@/static/images/log.svg'
import new_slide from '@/static/images/new_slide.svg'
import redo from '@/static/images/redo.svg'
import shape from '@/static/images/shape.svg'
import slideshow from '@/static/images/slideshow.svg'
import text from '@/static/images/text.svg'
import undo from '@/static/images/undo.svg'
import { TActionsButton } from '@/types/action_buttons.type'

export const baseActions: TActionsButton[] = [
  {
    id: 'add_slide_btn',
    name: 'Добавить слайд',
    iconUrl: new_slide,
    contextMenu: null,
  },
  {
    id: 'undo_btn',
    name: 'Отменить действие',
    iconUrl: undo,
    contextMenu: null,
  },
  {
    id: 'redo_btn',
    name: 'Повторить действие',
    iconUrl: redo,
    contextMenu: null,
  },
  {
    id: 'select_btn',
    name: 'Стандартный инструмент',
    iconUrl: arrow,
    contextMenu: null,
  },
  {
    id: 'new_text_btn',
    name: 'Добавить текстовое поле',
    iconUrl: text,
    contextMenu: null,
  },
  {
    id: 'new_image_btn',
    name: 'Добавить изображение',
    iconUrl: image,
    contextMenu: null,
  },
  {
    id: 'new_shape_btn',
    name: 'Добавить фигуру',
    iconUrl: shape,
    contextMenu: [
      {
        id: 'new_ellipse_btn',
        name: 'Эллипс',
      },
      {
        id: 'new_rect_btn',
        name: 'Прямоугольник',
      },
      {
        id: 'new_triangle_btn',
        name: 'Треугольник',
      },
    ],
  },
]

export const devActions: TActionsButton[] = [
  {
    id: 'log_btn',
    name: 'Print model',
    iconUrl: log,
    contextMenu: null,
  },
  {
    id: 'slide_show_btn',
    name: 'Dev slideshow',
    iconUrl: slideshow,
    contextMenu: null,
  },
]
