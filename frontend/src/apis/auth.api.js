import {
  baseQuery
} from "utils/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
  baseQuery: baseQuery,
  reducerPath: "authApi",
  endpoints: (build) => ({
    signin: build.mutation({
      query(body) {
        return {
          url: `/api/v1/login/`,
          method: "POST",
          body
        };
      },
    }),
    signup: build.mutation({
      query(body) {
        return {
          url: `/api/v1/signup/`,
          method: "POST",
          body
        };
      },
    }),
    getUser: build.query({
      query() {
        return {
          url: '/api/v1/user/info/',
          method: "GET"
          // method: "GET",
        };
      },
    }),
    signInwithGoogle: build.query({
      query(body) {
        return {
          url: `/accounts/google/login/`,
          method: "GET"
        };
      },
    }),
    signInwithGoogleApi: build.query({
      query() {
        return {
          url: `/api/v1/login/google/`,
          method: "GET"
        };
      },
    }),
  }),
});

export const { useSigninMutation, useSignupMutation, useGetUserQuery, useLazySignInwithGoogleQuery } = authApi;
