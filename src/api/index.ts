import axios from 'axios'

const KEY = import.meta.env.VITE_SERVER_TOKEN
const SERVER_NAME = import.meta.env.VITE_SERVER_URL
const oneWeek = 60 * 60 * 24 * 7

const HEADERS = {
  'x-authorization-server': `Basic ${KEY}`,
  'Cache-Control': `max-age=${oneWeek}`,
  'Content-Type': 'text/plain'
}

function getRandomWords(cuantity: number) {
  return axios.get('/random',
    {
      params: {
        cuantity
      }
    }
  )
}

async function searchWord(words: string) {

  if(words.length < 3) return []

  const result = await axios.get(`${SERVER_NAME}/words/byWord/${words}/true`, { headers: HEADERS })

  if(result.data.error === false) {
    return result.data.response
  }

  return []
}

async function searchLetter(letter: string, page: number = 0) {

  if(letter.length === 0) return []

  const result = await axios.get(`${SERVER_NAME}/words/list/${letter}/10/${page}`, { headers: HEADERS })

  if(result.data.error === false) {
    return result.data.response
  }

  return []
}

export {
  getRandomWords,
  searchWord,
  searchLetter
}