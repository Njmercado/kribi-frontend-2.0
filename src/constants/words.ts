export interface IWord {
  word: string
  translations: Array<string>
  language: 'es' | 'pal'
}

const WORDS: Array<IWord> = [
  {
    word: 'lanzar',
    translations: ['abbolia', 'prueba'],
    language: 'es'
  },
  {
    word: 'destruir',
    translations: ['achicha'],
    language: 'es'
  },
  {
    word: 'groseria',
    translations: ['pachota', 'prueba2', 'prueba3'],
    language: 'es'
  },
  {
    word: 'expresion de dolor',
    translations: ['olelee'],
    language: 'es'
  },
]

export default WORDS;