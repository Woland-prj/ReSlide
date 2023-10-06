import { TMenuButton } from '@/types/menu_buttons.type'

export const menu_buttons: TMenuButton[] = [
  {
    name: 'Файл',
    contextButtons: [
      {
        name: 'Создать',
      },
      {
        name: 'Открыть',
      },
      {
        name: 'Экспортировать',
      },
    ],
  },
  {
    name: 'Правка',
    contextButtons: [
      {
        name: 'Отменить',
      },
      {
        name: 'Повторить',
      },
      {
        name: 'Вырезать',
      },
      {
        name: 'Копировать',
      },
      {
        name: 'Вставить',
      },
    ],
  },
  {
    name: 'Вид',
    contextButtons: [
      {
        name: 'Слайдшоу',
      },
      {
        name: 'Полный экран',
      },
    ],
  },
  {
    name: 'Вставка',
    contextButtons: [
      {
        name: 'Изображение',
      },
      {
        name: 'Текст',
      },
      {
        name: 'Фигура',
      },
    ],
  },
  {
    name: 'Слайд',
    contextButtons: [
      {
        name: 'Новый слайд',
      },
      {
        name: 'Дублировать слайд',
      },
      {
        name: 'Изменить фон',
      },
    ],
  },
]
