import { WordDTO } from "../interfaces";

export class Storage {
  constructor(public store: string) {}

  save(key: string, data: Array<WordDTO>) {
    localStorage.setItem(`${this.store}/${key}`, JSON.stringify(data))
  }

  get(key: string): Array<WordDTO> {
    return JSON.parse(localStorage.getItem(`${this.store}/${key}`) || '{}');
  }
  
  exists(key: string): boolean {
    return !!localStorage.getItem(`${this.store}/${key}`);
  }
}

class LetterStorage extends Storage {
  constructor() {
    super('letter');
  }
}

class WordStorage extends Storage {
  constructor() {
    super('word');
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
    if(this._letter) { return this._letter; }
    this._letter = new LetterStorage();
    return this._letter;
  }

  get word() {
    if(this._word) { return this._word; }
    this._word = new WordStorage();
    return this._word;
  }
}