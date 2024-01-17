import arrow from '@/static/images/arrow.svg'
import vector_background_color from '@/static/images/background_color.svg'
import duplicate from '@/static/images/duplicate.svg'
import formatting_bold from '@/static/images/formatting_bold.svg'
import italic from '@/static/images/formatting_italic.svg'
import size from '@/static/images/formatting_size.svg'
import strikethrough from '@/static/images/formatting_strikethrough.svg'
import text_color from '@/static/images/formatting_text_color.svg'
import underline from '@/static/images/formatting_underline.svg'
import image from '@/static/images/image.svg'
import log from '@/static/images/log.svg'
import new_slide from '@/static/images/new_slide.svg'
import shape from '@/static/images/shape.svg'
import slideshow from '@/static/images/slideshow.svg'
import vector_stroke_color from '@/static/images/stroke_color.svg'
import text from '@/static/images/text.svg'
import { ButtonType, TActionsButton } from '@/types/action_buttons.type'

export const baseActions: TActionsButton[] = [
  {
    id: 'add_slide_btn',
    name: 'Добавить слайд',
    iconUrl: new_slide,
    contextMenu: null,
    type: ButtonType.IMAGE_BUTTON,
  },
  {
    id: 'duplicate_slide_btn',
    name: 'Дублировать слайд',
    iconUrl: duplicate,
    contextMenu: null,
    type: ButtonType.IMAGE_BUTTON,
  },
  {
    id: 'select_btn',
    name: 'Стандартный инструмент',
    iconUrl: arrow,
    contextMenu: null,
    type: ButtonType.IMAGE_BUTTON,
  },
  {
    id: 'new_text_btn',
    name: 'Добавить текстовое поле',
    iconUrl: text,
    contextMenu: null,
    type: ButtonType.IMAGE_BUTTON,
  },
  {
    id: 'new_image_btn',
    name: 'Добавить изображение',
    iconUrl: image,
    contextMenu: null,
    type: ButtonType.IMAGE_BUTTON,
  },
  {
    id: 'new_shape_btn',
    name: 'Добавить фигуру',
    iconUrl: shape,
    type: ButtonType.IMAGE_BUTTON,
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
    type: ButtonType.IMAGE_BUTTON,
  },
  {
    id: 'slide_show_btn',
    name: 'Dev slideshow',
    iconUrl: slideshow,
    contextMenu: null,
    type: ButtonType.IMAGE_BUTTON,
  },
]

export const textActions: TActionsButton[] = [
  {
    id: 'bold_btn',
    name: 'Жирный',
    iconUrl: formatting_bold,
    contextMenu: null,
    type: ButtonType.IMAGE_BUTTON,
  },
  {
    id: 'italic_btn',
    name: 'Курсив',
    iconUrl: italic,
    contextMenu: null,
    type: ButtonType.IMAGE_BUTTON,
  },
  {
    id: 'underline_btn',
    name: 'Подчёркивание',
    iconUrl: underline,
    contextMenu: null,
    type: ButtonType.IMAGE_BUTTON,
  },
  {
    id: 'strikethrough_btn',
    name: 'Перечёркивание',
    iconUrl: strikethrough,
    contextMenu: null,
    type: ButtonType.IMAGE_BUTTON,
  },
  {
    id: 'text_color_btn',
    name: 'Цвет текста',
    iconUrl: text_color,
    contextMenu: null,
    type: ButtonType.COLOR_INPUT_BUTTON,
  },
  {
    id: 'size_btn',
    name: 'Размер текста',
    iconUrl: size,
    contextMenu: null,
    type: ButtonType.SIZE_INPUT_BUTTON,
  },
]

export const vectorActions: TActionsButton[] = [
  {
    id: 'vector_stroke_color_btn',
    name: 'Цвет обводки',
    iconUrl: vector_stroke_color,
    contextMenu: null,
    type: ButtonType.COLOR_INPUT_BUTTON,
  },
  {
    id: 'vector_background_color_btn',
    name: 'Цвет фона',
    iconUrl: vector_background_color,
    contextMenu: null,
    type: ButtonType.COLOR_INPUT_BUTTON,
  },
]
