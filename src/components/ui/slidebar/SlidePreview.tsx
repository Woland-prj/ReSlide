import { FC } from "react";
import { TSlide } from "types/type"
import { doc } from "data/data_max"


const SlidePreview: FC = () => {
    return (
        <div className="SlidePreview">
            {doc.slides.map(slide => (
              /*<Slide
                id={slide.id}
                background={slide.background}
                objects={slide.objects}
              ></Slide>*/
            ))}
        </div>
    )
}