import { baseActions } from '@/data/actions_menu_buttons.data'
import TextButton from '@ui/app_menu/actions_menu/TextButton'
import { FC } from 'react'

const MenuButtons: FC = () => {
  return (
    <div className='MenuButtons'>
      {baseActions.map(button => (
        <TextButton key={button.name} button={button}></TextButton>
      ))}
    </div>
  )
}

export default MenuButtons
