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
  return await axios.get(`${SERVER_NAME}/words/byWord/${words}/true`, { headers: HEADERS })
}

async function searchLetter(letter: string) {
  return await axios.get(`${SERVER_NAME}/words/list/${letter}/10`, { headers: HEADERS })
}

export {
  getRandomWords,
  searchWord,
  searchLetter
}