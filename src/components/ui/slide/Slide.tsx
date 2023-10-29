import { ObjectType, TImage, TSlide, TText, TVector } from '@/types/type'
import { FC } from 'react'
import TextField from './text/TextField'

type TSlideProps = {
  slide: TSlide
}

const Objects: FC<TText | TVector | TImage> = ({ type, ...obj_props }) => {
  switch (type) {
    case ObjectType.Text:
      return <TextField text={obj_props.value} />
  }
}

const Slide: FC<TSlideProps> = ({ slide }) => {
  return <div className='slide'></div>
}

export default Slide
