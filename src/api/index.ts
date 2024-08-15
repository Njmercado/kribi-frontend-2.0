import axios from 'axios'

const KEY = 'SERVER_TOKEN'
const SERVER_NAME = 'http://localhost:8000'
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