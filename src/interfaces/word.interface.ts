export interface IWord {
  palabra: string
  definicion: Array<string>
  language?: 'es' | 'pal'
  popularidad: number
  ejemplos: Array<string>
}