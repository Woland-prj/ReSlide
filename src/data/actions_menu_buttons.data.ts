import arrow from '@/static/images/arrow.svg'
import image from '@/static/images/image.svg'
import log from '@/static/images/log.svg'
import new_slide from '@/static/images/new_slide.svg'
import redo from '@/static/images/redo.svg'
import shape from '@/static/images/shape.svg'
import slideshow from '@/static/images/slideshow.svg'
import text from '@/static/images/text.svg'
import undo from '@/static/images/undo.svg'
import formatting_bold from '@/static/images/formatting_bold.svg'
import size from '@/static/images/formatting_size.svg'
import italic from '@/static/images/formatting_italic.svg'
import strikethrough from '@/static/images/formatting_strikethrough.svg'
import underline from '@/static/images/formatting_underline.svg'
import text_color from '@/static/images/formatting_text_color.svg'
import { TActionsButton } from '@/types/action_buttons.type'
import vector_background_color from '@/static/images/background_color.svg'
import vector_stroke_color from '@/static/images/stroke_color.svg'

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

export const textActions: TActionsButton[] = [
  {
    id: 'bold_btn',
    name: 'Жирный',
    iconUrl: formatting_bold,
    contextMenu: null,
  },
  {
    id: 'italic_btn',
    name: 'Курсив',
    iconUrl: italic,
    contextMenu: null,
  },
  {
    id: 'underline_btn',
    name: 'Подчёркивание',
    iconUrl: underline,
    contextMenu: null,
  },
  {
    id: 'strikethrough_btn',
    name: 'Перечёркивание',
    iconUrl: strikethrough,
    contextMenu: null,
  },
  {
    id: 'text_color_btn',
    name: 'Цвет текста',
    iconUrl: text_color,
    contextMenu: null,
  },
  {
    id: 'size_btn',
    name: 'Размер текста',
    iconUrl: size,
    contextMenu: null,
  },
]

export const vectorActions: TActionsButton[] = [
  {
    id: 'vector_stroke_color_btn',
    name: 'Цвет обводки',
    iconUrl: vector_stroke_color,
    contextMenu: null,
  },
  {
    id: 'vector_background_color_btn',
    name: 'Цвет фона',
    iconUrl: vector_background_color,
    contextMenu: null,
  },
]
