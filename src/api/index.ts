import axios from 'axios'

function getRandomWords(cuantity: number) {
  return axios.get('/random',
    {
      params: {
        cuantity
      }
    }
  )
}

export {
  getRandomWords
}