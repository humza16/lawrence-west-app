import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { localstorageService } from "./localStorageService";
import toast from 'react-hot-toast';
import axios from 'axios';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  prepareHeaders: async (headers) => {
    if (localstorageService?.getToken()) {
      headers.set("Authorization", `Bearer ${localstorageService.getToken()}`);
      headers.set("Content-Type", "application/json");
    }
    return headers;
  },
});

const refreshToken = async () => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/refresh/`, {
    refresh: localstorageService.getRefreshToken(),
  });
  return response.data;
};


export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    try {
      const refreshResult = await refreshToken();
      if (refreshResult?.access) {
        const { access, refresh } = refreshResult || {};
        localstorageService.setToken(access);
        localstorageService.setRefreshToken(refresh);
      }
    } catch (e) {
      console.log(e)
      toast.error(result?.message || result?.error);
      localstorageService.logout();
    }
  }
  return result;
};


