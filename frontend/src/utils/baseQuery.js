import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { localstorageService } from "./localStorageService";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  prepareHeaders: async (headers) => {
    if (localstorageService?.getToken()) {
      headers.set("Authorization", `Bearer ${localstorageService.getToken()}`);
      headers.set("Content-Type", "application/json");
      headers.set('Access-Control-Allow-Origin', '*')
    }
    return headers;
  },
});
