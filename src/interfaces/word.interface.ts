import { WordDTO } from "./word.dto.interface"

export interface IWord extends WordDTO {
  language?: 'es' | 'pal'
}