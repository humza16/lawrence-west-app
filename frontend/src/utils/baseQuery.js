import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { localstorageService } from "./localStorageService";
// import { env } from "../../config";
// import { localstorageService } from "./localStorageService";
// const API_BASE_URL = env("API_URL");

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL || "http://localhost:8000",
  prepareHeaders: async (headers) => {
    if (localstorageService?.getToken()) {
      headers.set("Authorization", `Bearer ${localstorageService.getToken()}`);
      headers.set("Content-Type", "application/json");
      headers.set('Access-Control-Allow-Origin', '*')
    }
    return headers;
  },
});
