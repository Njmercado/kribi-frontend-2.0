import { configureStore } from "@reduxjs/toolkit";
import { baseApi as kribiBaseApi } from "./kribiStore/baseApi";

export const store = configureStore({
  reducer: {
    [kribiBaseApi.reducerPath]: kribiBaseApi.reducer,
  },
  middleware: (get) => get().concat(kribiBaseApi.middleware),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
