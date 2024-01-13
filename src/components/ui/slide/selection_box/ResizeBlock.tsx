import { useResize } from '@/hooks/useResize'
import { ResizeTypes, TResizeDot } from '@/types/resize.type'
import { FC, RefObject, useEffect, useRef } from 'react'
import styles from './ResizeBlock.module.css'

type TResizeDotProps = {
  dot: TResizeDot
  objId: number
  objRef: RefObject<HTMLDivElement>
}

type TResizeBlockProps = {
  dots: TResizeDot[]
  objId: number
  objRef: RefObject<HTMLDivElement>
}

const ResizeDot: FC<TResizeDotProps> = ({ dot, objId, objRef }) => {
  const { registerItemFn, unregisterItemFn } = useResize(objId, dot.handler)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // console.log(objRef.current)
    const resizeHandlers = registerItemFn(dotRef, objRef)
    return () => unregisterItemFn(dotRef, resizeHandlers)
  }, [])

  return (
    <div className={styles.resize} style={dot.style} ref={dotRef}>
      <div className={styles.resize_visible}></div>
    </div>
  )
}

const ResizeBlockComp: FC<TResizeBlockProps> = ({ dots, objId, objRef }) => {
  const getDot = (type: ResizeTypes): TResizeDot => {
    return dots.filter(dot => dot.type === type)[0]
  }
  return (
    <div className={styles.resize_container_row}>
      <div className={styles.resize_container_column}>
        <ResizeDot
          dot={getDot(ResizeTypes.TOP_LEFT)}
          objId={objId}
          objRef={objRef}
        />
        <ResizeDot
          dot={getDot(ResizeTypes.MIDDLE_LEFT)}
          objId={objId}
          objRef={objRef}
        />
        <ResizeDot
          dot={getDot(ResizeTypes.BOTTOM_LEFT)}
          objId={objId}
          objRef={objRef}
        />
      </div>
      <div className={styles.resize_container_column}>
        <ResizeDot
          dot={getDot(ResizeTypes.MIDDLE_TOP)}
          objId={objId}
          objRef={objRef}
        />
        <ResizeDot
          dot={getDot(ResizeTypes.MIDDLE_BOTTOM)}
          objId={objId}
          objRef={objRef}
        />
      </div>
      <div className={styles.resize_container_column}>
        <ResizeDot
          dot={getDot(ResizeTypes.TOP_RIGHT)}
          objId={objId}
          objRef={objRef}
        />
        <ResizeDot
          dot={getDot(ResizeTypes.MIDDLE_RIGHT)}
          objId={objId}
          objRef={objRef}
        />
        <ResizeDot
          dot={getDot(ResizeTypes.BOTTOM_RIGHT)}
          objId={objId}
          objRef={objRef}
        />
      </div>
    </div>
  )
}

export default ResizeBlockComp
