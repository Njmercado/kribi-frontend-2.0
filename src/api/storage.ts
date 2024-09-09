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
