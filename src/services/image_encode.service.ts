import { TSize } from '@/types/type'

export type TImgProps = {
  name?: string
  data: string
  size: TSize
}

export const imageToBase64 = (event: Event): Promise<TImgProps> => {
  return new Promise(resolve => {
    const reader = new FileReader()
    const target = event.target as HTMLInputElement
    const file = target.files ? target.files[0] : null
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const img = new Image()
        img.src = reader.result
        console.log(img.width, img.height)
        img.onload = () =>
          resolve({
            name: file?.name,
            data: img.src,
            size: {
              width: img.width,
              height: img.height,
            },
          })
      }
    }
    if (file) reader.readAsDataURL(file)
  })
}

// export const base64ToImage = (base64Data: string): Promise<string> => {
//   return new Promise(resolve => {
//     const reader = new FileReader()
//     reader.onload = () => {
//       if (typeof reader.result === 'string') {
//         console.log(btoa(reader.result))
//         resolve(btoa(reader.result))
//       }
//     }
//     reader.readAsBinaryString(imgFile)
//   })
// }
