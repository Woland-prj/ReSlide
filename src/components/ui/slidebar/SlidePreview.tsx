import { FC } from 'react'
import { TSlide } from 'types/type'
import { doc } from 'data/data_max'

type SlidePreview = {
  slides: TSlide[]
}

export const SlidePreview: FC<SlidePreview> = ({slides=doc.slides}) => {
  return (
    <div className='SlidePreview'>
      {slides.map(slide => (
        <Slide
          id={slide.id}
          background={slide.background}
          objects={slide.objects}
        ></Slide>
      ))}
      
    </div>
  )
}
