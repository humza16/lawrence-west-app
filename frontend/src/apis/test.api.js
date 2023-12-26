import { baseQuery } from "utils/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const testApi = createApi({
  baseQuery: baseQuery,
  reducerPath: "testApi",
  endpoints: (build) => ({
    getData: build.query({
      query() {
        return {
          url: `/users`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetDataQuery } = testApi;
