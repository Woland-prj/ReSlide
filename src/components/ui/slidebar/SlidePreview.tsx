import { doc } from '@/data/data_max'
import { FC } from 'react'

const Slide: FC = () => {
  return <></>
}

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
