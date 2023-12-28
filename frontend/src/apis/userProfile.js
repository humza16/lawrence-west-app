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
      query(country) {
        return {
          url: `/states`,
          method: "GET",
          body: { country }
        };
      },
    }),
    getCities: build.query({
      query(body) {
        return {
          url: `/cities`,
          method: "GET",
          body: body
        };
      },
    }),
  }),
});

export const {
  useCreateUserProfileMutation,
  useGetCountriesQuery,
  useGetStatesQuery,
  useGetCitiesQuery
} = userProfileApi;
