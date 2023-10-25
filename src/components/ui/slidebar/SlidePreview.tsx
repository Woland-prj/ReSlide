import { doc } from '@/data/data_max'
import { FC } from 'react'

const Slide: FC = () => {
  return <></>
}

type SlidePreview = {
  slides: TSlide[]
}

export const SlidePreview: FC<SlidePreview> = ({slides=doc.slides}) => {
  return (
    <div className='SlidePreview'>
      {slides.map(slide => (
        <Slide
          key={slide.id}
          id={slide.id}
          background={slide.background}
          objects={slide.objects}
        ></Slide>
      ))}
      
    </div>
  )
}
