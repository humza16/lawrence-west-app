import { baseQueryWithReauth } from "utils/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const userProfileApi = createApi({
  baseQuery: baseQueryWithReauth,
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
    changePassword: build.mutation({
      query(body) {
        return {
          url: `/api/v1/change-password/`,
          method: "PUT",
          body
        }
      }
    }),
    editProfile: build.mutation({
      query(body) {
        return {
          url: `api/v1/edit-profile/`,
          method: "PUT",
          body
        }
      }
    })
  }),
});

export const {
  useCreateUserProfileMutation,
  useGetCountriesQuery,
  useGetStatesQuery,
  useGetCitiesQuery,
  useChangePasswordMutation,
  useEditProfileMutation
} = userProfileApi;
