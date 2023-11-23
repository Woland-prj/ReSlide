import { useDoc } from '@/hooks/useDoc'
import { FC } from 'react'

const PresentationName: FC = () => {
  const { name } = useDoc()
  return <h1>{name}</h1>
}

export default PresentationName
