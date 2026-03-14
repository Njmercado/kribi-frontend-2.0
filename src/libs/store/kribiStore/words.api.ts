import { baseApi } from "./baseApi";
import { ENDPOINTS } from "../../../enums";
import { WordResponseDTO, WordDTO } from "../../../interfaces";

export const wordsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWords: builder.query<WordResponseDTO, string>({
      query: (word: string) => `${ENDPOINTS.GET_WORDS_BY_WORD}?word=${word}`,
    }),
    // TODO: this type of return data will be changed to WordResponseDTO but first Its necessary to change the backend
    getLetterWords: builder.query<WordDTO[], { letter: string, page: number, limit: number }>({
      query: ({ letter, page, limit }) => `${ENDPOINTS.GET_WORDS_BY_LETTER}/${letter}?page=${page}&limit=${limit}`,
    }),
    getRandomWords: builder.query<WordDTO[], { quantity: number }>({
      query: ({ quantity }) => `${ENDPOINTS.GET_RANDOM_WORDS}?quantity=${quantity}`,
    }),
  }),
});

export const {
  useLazyGetWordsQuery,
  useGetLetterWordsQuery,
  useLazyGetRandomWordsQuery
} = wordsApi;
