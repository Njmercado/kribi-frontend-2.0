import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const SERVER_PROD_NAME = import.meta.env.VITE_PROD_SERVER_URL

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_PROD_NAME}/`
  }),
  tagTypes: ['Words', 'Letters', 'Articles'],
  endpoints: () => ({})
});
