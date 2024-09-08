import { WordDTO } from "../interfaces";

class LetterStorage {
  constructor() {}

  save(letter: string, page: number, data: Array<WordDTO>) {
    localStorage.setItem(`letter/${letter}/${page}`, JSON.stringify(data))
  }

  get(letter: string, page: number) {
    return JSON.parse(localStorage.getItem(`letter/${letter}/${page}`) || '{}');
  }

  exists(letter: string, page: number) {
    return !!localStorage.getItem(`letter/${letter}/${page}`);
  }
}

class WordStorage {
  constructor() {}

  save(word: string, data: Array<WordDTO>) {
    localStorage.setItem(`word/${word}`, JSON.stringify(data))
  }

  get(word: string) {
    return JSON.parse(localStorage.getItem(`word/${word}`) || '{}');
  }

  exists(word: string) {
    return !!localStorage.getItem(`letter/${word}`);
  }
}

export default class DictionaryStorage {
  private _letter: LetterStorage;
  private _word: WordStorage;

  constructor() {
    this._letter = new LetterStorage();
    this._word = new WordStorage();
  }

  get letter() {
    return this._letter;
  }

  get word() {
    return this._word
  }
}

// export function verifyStorageForLetter(letter: string, page: number = 0): null | object {
//   if (localStorage.getItem(`letter_${letter}_${page}`)) 
//     return JSON.parse(localStorage.getItem(`letter_${letter}_${page}`) || '{}');
//   return null
// }

// export function saveStorageForLetter(letter: string, page: number, data: Array<WordDTO>) {
//   localStorage.setItem(`letter_${letter}_${page}`, JSON.stringify(data))
// }

// export function verifyStorageForWord(word: string): null | object {
//   if (localStorage.getItem(`word_${word}`)) 
//     return JSON.parse(localStorage.getItem(`word_${word}`) || '{}');
//   return null
// }

// export function saveStorageForWord(word: string, data: Array<WordDTO>) {
//   localStorage.setItem(`word_${word}`, JSON.stringify(data))
// }