import { TDocument } from '@/types/type'

const readJSONFile = (event: Event): Promise<TDocument> => {
  return new Promise(resolve => {
    const reader = new FileReader()
    const target = event.target as HTMLInputElement
    const file = target.files ? target.files[0] : null
    // TODO: обработка ошибок загрузки и валидация данных
    if (!file) console.error(Error('File is not open'))
    if (file?.type !== 'application/json') {
      console.error(Error('It is not a presentation file'))
      return
    }
    reader.onload = () => {
      const data = reader.result?.toString()
      // TODO: validateDoc(data)
      const jsonData: TDocument = JSON.parse(data!)
      resolve(jsonData)
    }
    if (file) reader.readAsText(file)
  })
}

export { readJSONFile }
