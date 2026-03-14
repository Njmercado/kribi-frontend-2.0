import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const SERVER_NAME = import.meta.env.VITE_DEV_SERVER_URL

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_NAME}/`
  }),
  tagTypes: ['Words', 'Letters', 'Articles'],
  endpoints: () => ({})
});
