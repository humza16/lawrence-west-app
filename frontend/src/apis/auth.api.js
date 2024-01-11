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
    signInwithGoogle: build.mutation({
      query(body) {
        return {
          url: `api/v1/login/google/`,
          method: "POST",
          body
        };
      },
    }),
    sendResetEmail: build.mutation({
      query(body) {
        return {
          url: `api/v1/password-reset/`,
          method: "POST",
          body
        };
      },
    }),
    resetPassword: build.mutation({
      query(body) {
        return {
          url: `api/v1/password-reset-confirm/`,
          method: "POST",
          body
        };
      },
    }),
  }),
});

export const { useSigninMutation, useSignupMutation, useGetUserQuery, useSignInwithGoogleMutation, useResetPasswordMutation, useSendResetEmailMutation } = authApi;
