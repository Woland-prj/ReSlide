import { TButtonGroup } from '@/types/context_menu_buttons.type'
import shape from '@/static/images/shape.svg'
import text from '@/static/images/text.svg'
import image from '@/static/images/image.svg'

export enum slideButtonGroupNames {
  'new_object_buttons',
}
export enum slidebarButtonGroupNames {
  'slidebar_buttons',
}

export const context_menu_button_groups: TButtonGroup[] = [
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
