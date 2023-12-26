import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { env } from "../../config";
// import { localstorageService } from "./localStorageService";
// const API_BASE_URL = env("API_URL");

export const baseQuery = fetchBaseQuery({
  //   baseUrl: API_BASE_URL ?? process.env.NEXT_PUBLIC_API_URL,
  baseUrl: "https://jsonplaceholder.typicode.com",
  prepareHeaders: async (headers) => {
    // if (localstorageService?.getToken()) {
    //   headers.set("Authorization", `Bearer ${localstorageService.getToken()}`);
    // }
    // if (localstorageService?.getStoreId()) {
    //   headers.set('Store-id', localstorageService.getStoreId());
    // }
    return headers;
  },
});
