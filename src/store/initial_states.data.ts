import { TInitialState } from '@/store/types'
import { SlideBgType } from '@/types/type'

const docInitialName: string = 'Презентация без названия'

const docInitialState: TInitialState = {
  document: {
    name: docInitialName,
    size: {
      width: 960,
      height: 540,
    },
    slides: [
      {
        id: 1,
        background: {
          variation: SlideBgType.Color,
          value: '#FFFFFF',
        },
        objects: [],
        isSelected: true,
      },
    ],
  },
}

export { docInitialState, docInitialName }
