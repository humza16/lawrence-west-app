import { baseQuery } from "utils/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const userProfileApi = createApi({
  baseQuery: baseQuery,
  reducerPath: "userProfileApi",
  endpoints: (build) => ({
    createUserProfile: build.mutation({
      query(body) {
        return {
          url: `/users`,
          method: "POST",
          body
        };
      },
    }),
    getCountries: build.query({
      query() {
        return {
          url: `/countries`,
          method: "GET"
        };
      },
    }),
    getStates: build.query({
      query(data) {
        return {
          url: `/states`,
          method: "GET",
        };
      },
    }),
    getCities: build.query({
      query(data) {
        return {
          url: `/cities`,
          method: "GET",
        };
      },
    }),
    getUser: build.query({
      query(token) {
        return {
          url: `/users`,
          method: "GET",
          params: { token: token }
        };
      },
    }),
  }),
});

export const {
  useCreateUserProfileMutation,
  useGetCountriesQuery,
  useGetStatesQuery,
  useGetCitiesQuery,
  useGetUserQuery,
  useLazyGetCountriesQuery,
  useLazyGetStatesQuery,
  useLazyGetCitiesQuery
} = userProfileApi;
