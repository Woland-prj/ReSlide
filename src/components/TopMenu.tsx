import { MenuButtons } from './MenuButtons'
import { PresentationName } from './PresentationName'
type TopMenuProps = {
  presentationName: string
}

export function TopMenu(props: TopMenuProps) {
  return
  ;<>
    <PresentationName name='presentationName'></PresentationName>,
    <MenuButtons></MenuButtons>
  </>
}
