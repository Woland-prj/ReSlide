import { TButtonGroup } from '@/types/context_menu_buttons.type'
import shape from '@/static/images/shape.svg'
import text from '@/static/images/text.svg'
import image from '@/static/images/image.svg'
import formatting_bold from '@/static/images/formatting_bold.svg'
import formatting_italic from '@/static/images/formatting_italic.svg'
import formatting_size from '@/static/images/formatting_size.svg'
import formatting_strikethrough from '@/static/images/formatting_strikethrough.svg'
import formatting_text_color from '@/static/images/formatting_text_color.svg'
export enum textButtonGroupNames {
  'new_object_buttons',
  'edit_text_object_buttons',
}
export enum imageButtonGroupNames {
  'new_object_buttons',
  'edit_image_object_buttons',
}
export enum vectorButtonGroupNames {
  'new_object_buttons',
  'edit_vector_object_buttons',
}
export enum slideButtonGroupNames {
  'new_object_buttons',
}
export enum slidebarButtonGroupNames {
  'slidebar_buttons',
}

export const context_menu_button_groups: TButtonGroup[] = [
  {
    id: 'edit_text_object_buttons',
    buttons: [
      {
        id: 'formatting_bold',
        name: 'Жирный',
        iconUrl: formatting_bold,
      },
      {
        id: 'formatting_italic',
        name: 'Курсив',
        iconUrl: formatting_italic,
      },
      {
        id: 'formatting_strikethrough',
        name: 'Зачеркнутый',
        iconUrl: formatting_strikethrough,
      },
      {
        id: 'formatting_size',
        name: 'Размер шрифта',
        iconUrl: formatting_size,
      },
      {
        id: 'formatting_text_color',
        name: 'Цвет шрифта',
        iconUrl: formatting_text_color,
      },
    ],
  },
  {
    id: 'edit_vector_object_buttons',
    buttons: [
      {
        id: 'formatting_bold',
        name: 'Жирный',
        iconUrl: formatting_bold,
      },
      {
        id: 'formatting_italic',
        name: 'Курсив',
        iconUrl: formatting_italic,
      },
      {
        id: 'formatting_strikethrough',
        name: 'Зачеркнутый',
        iconUrl: formatting_strikethrough,
      },
      {
        id: 'formatting_size',
        name: 'Размер шрифта',
        iconUrl: formatting_size,
      },
      {
        id: 'formatting_text_color',
        name: 'Цвет шрифта',
        iconUrl: formatting_text_color,
      },
    ],
  },
  {
    id: 'new_object_buttons',
    buttons: [
      {
        id: 'new_text_button',
        name: 'Текстовое поле',
        iconUrl: text,
      },
      {
        id: 'new_image_button',
        name: 'Картинка',
        iconUrl: image,
      },
      {
        id: 'new_shape_button',
        name: 'Фигура',
        iconUrl: shape,
      },
    ],
  },
  {
    id: 'slidebar_buttons',
    buttons: [
      {
        id: 'new_slide_button',
        name: 'Создать слайд',
        iconUrl: '',
      },
      {
        id: 'slide_duplicate_button',
        name: 'Создать дубликат слайда',
        iconUrl: '',
      },
    ],
  },
]
