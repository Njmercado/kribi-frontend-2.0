import axios from 'axios'
import { WordDTO } from '../interfaces';
import { ENDPOINTS } from '../enums';
import DictionaryStorage from './storage';

const TOKEN = import.meta.env.VITE_SERVER_TOKEN
const SERVER_NAME = import.meta.env.VITE_SERVER_URL

const storage = new DictionaryStorage()

const HEADERS = new Headers();
HEADERS.append("x-api-key", TOKEN);

function getRandomWords(cuantity: number) {
  return axios.get('/random',
    {
      params: {
        cuantity
      }
    }
  )
}

async function searchWord(words: string): Promise<Array<WordDTO>> {

  if (words.length < 3) return []

  if(storage.word.exists(words)) return storage.word.get(words) as unknown as Array<WordDTO>

  try {
    const request = await fetch(
      `${SERVER_NAME}/${ENDPOINTS.GET_WORDS_BY_WORD}?words=${words}`,
      { headers: HEADERS, method: 'GET' }
    )

    const data = await request.json()

    storage.word.save(words, data)

    if (request.status === 200) return data
  } catch (error) {
    console.error("ERROR: ", error)
  }

  return []
}

async function searchLetter(letter: string, page: number = 0): Promise<Array<WordDTO>> {

  if (letter.length === 0) return []
  if(storage.letter.exists(letter, page)) return storage.letter.get(letter, page) as unknown as Array<WordDTO>

  try {
    const request = await fetch(
      `${SERVER_NAME}/${ENDPOINTS.GET_WORDS_BY_LETTER}?letter=${letter}&page=${page}`,
      { headers: HEADERS, method: 'GET' }
    )

    const data = await request.json()

    storage.letter.save(letter, page, data)

    if (request.status === 200) return data
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