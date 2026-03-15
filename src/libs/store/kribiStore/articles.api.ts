import { baseApi } from "./baseApi";
import { ENDPOINTS } from "../../../enums";
import { IArticleSynopsis, IArticle } from "../../../interfaces";

export const articlesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticlesSynopsis: builder.query<Array<IArticleSynopsis>, void>({
      query: () => ENDPOINTS.GET_ARTICLES_SYNOPSIS,
      providesTags: ["Articles"],
      transformResponse: (response: Array<IArticleSynopsis>) => {
        return response.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      }
    }),
    getArticleById: builder.query<IArticle, number>({
      query: (id: number) => `${ENDPOINTS.GET_ARTICLE_BY_ID}/${id}`,
      providesTags: ["Articles"]
    })
  })
});

export const { useGetArticlesSynopsisQuery, useGetArticleByIdQuery } = articlesApi;
