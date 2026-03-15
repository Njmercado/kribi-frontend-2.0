export interface IWord {
  definitions: string[];
  type: string;
  word: string;
  id: number;
  translations: string[];
  language?: 'es' | 'pal';
}

export interface WordDTO extends Omit<IWord, 'language'> { }

export interface WordResponseDTO {
  words: WordDTO[];
  has_next_page: boolean;
}
