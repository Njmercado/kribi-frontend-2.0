import { WordDTO } from '../interfaces';
import { ENDPOINTS } from '../enums';
import DictionaryStorage from './storage';

const SERVER_NAME = import.meta.env.VITE_SERVER_URL

const storage = new DictionaryStorage()

const HEADERS = new Headers();

async function getRandomWords(quantity: number = 10): Promise<Array<WordDTO>> {
  try {
    const response = await fetch(
      `${SERVER_NAME}${ENDPOINTS.GET_RANDOM_WORDS}?quantity=${quantity}`,
      { headers: HEADERS, method: 'GET' }
    )

    const data = await response.json()

    if (response.status === 200) return data
  } catch (error) {
    console.error("ERROR: ", error)
  }

  return [];
}

async function searchWord(words: string): Promise<Array<WordDTO>> {

  if (words.length < 3) return []

  if (storage.word.exists(words)) return storage.word.get(words);

  try {
    const request = await fetch(
      `${SERVER_NAME}${ENDPOINTS.GET_WORDS_BY_WORD}?word=${words}`,
      { method: 'GET' }
    )

    const data = await request.json()


    if (request.status === 200) {
      storage.word.save(words, data)
      return data
    }
  } catch (error) {
    console.error("ERROR: ", error)
  }

  return []
}

async function searchLetter(letter: string, page: number = 1): Promise<Array<WordDTO>> {
  const KEY = `${letter}/${page}`
  if (letter.length === 0) return []
  if (storage.letter.exists(KEY)) return storage.letter.get(KEY);

  try {
    const request = await fetch(
      `${SERVER_NAME}${ENDPOINTS.GET_WORDS_BY_LETTER}${letter}?page=${page}&limit=10`,
      { headers: HEADERS, method: 'GET' }
    )

    const data = await request.json()

    if (request.status === 200) {
      storage.letter.save(KEY, data)
      return data
    }
  } catch (error) {
    console.error("ERROR: ", error)
  }

  return []
}

export {
  getRandomWords,
  searchWord,
  searchLetter
}