import { TDocument, TSize } from '@/types/type'

export type TInitialState = {
  document: TDocument
}

export type TChangeDocNamePayload = {
  name: string
}

export type TChangeDocFormatPayload = {
  size: TSize
}
