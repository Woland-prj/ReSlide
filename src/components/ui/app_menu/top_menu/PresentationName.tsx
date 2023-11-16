import { FC } from 'react'

const PresentationName: FC<{ name: string }> = ({ name }) => {
  return <h1>{name}</h1>
}

export default PresentationName
