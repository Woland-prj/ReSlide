import { FC } from 'react'
import TextButton from '@ui/top_menu/TextButton'
import { menu_buttons } from '@/data/top_menu_buttons.data'

const MenuButtons: FC = () => {
  return (
    <div className='MenuButtons'>
      {menu_buttons.map(button => (
        <TextButton
          key={button.name}
          text={button.name}
          hover={() => console.log('test')}
          onClick={() => console.log('test')}
        ></TextButton>
      ))}
    </div>
  )
}

export default MenuButtons
