import { FC } from 'react'
import { doc } from '@/data/data_max'

export const SlidePreview: FC = () => {
  return (
    <div className='SlidePreview'>
      {doc.slides.map(slide => (
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
