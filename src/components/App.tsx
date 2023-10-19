import ActionsMenu from '@ui/app_menu/actions_menu/ActionsMenu'
import TopMenu from '@ui/app_menu/top_menu/TopMenu'
import { FC } from 'react'

const App: FC = () => {
  return (
    <>
      <TopMenu presentationName={'Test pres'} />
      <ActionsMenu />
    </>
  )
}

export default App
