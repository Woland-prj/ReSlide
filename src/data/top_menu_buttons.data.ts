import { TMenuButton } from '@/types/menu_buttons.type'

export const menu_buttons: TMenuButton[] = [
  {
    name: 'Файл',
    contextButtons: [
      {
        id: 'create_btn',
        name: 'Создать',
      },
      {
        id: 'open_btn',
        name: 'Открыть',
      },
      {
        id: 'export_btn',
        name: 'Экспортировать',
      },
    ],
  },
  {
    name: 'Правка',
    contextButtons: [
      {
        id: 'undo_btn',
        name: 'Отменить',
      },
      {
        id: 'redo_btn',
        name: 'Повторить',
      },
      {
        id: 'cut_btn',
        name: 'Вырезать',
      },
      {
        id: 'copy_btn',
        name: 'Копировать',
      },
      {
        id: 'insert_btn',
        name: 'Вставить',
      },
    ],
  },
  {
    name: 'Вид',
    contextButtons: [
      {
        id: 'slideshow_btn',
        name: 'Слайдшоу',
      },
      {
        id: 'fullscreen_btn',
        name: 'Полный экран',
      },
    ],
  },
  {
    name: 'Вставка',
    contextButtons: [
      {
        id: 'new_image_btn',
        name: 'Изображение',
      },
      {
        id: 'new_text_btn',
        name: 'Текст',
      },
      {
        id: 'shape_btn',
        name: 'Фигура',
      },
    ],
  },
  {
    name: 'Слайд',
    contextButtons: [
      {
        id: 'add_slide_btn',
        name: 'Новый слайд',
      },
      {
        id: 'duplicate_slide_btn',
        name: 'Дублировать слайд',
      },
      {
        id: 'change_background_btn',
        name: 'Изменить фон',
      },
    ],
  },
]
