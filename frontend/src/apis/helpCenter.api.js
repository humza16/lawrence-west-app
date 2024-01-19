import { baseQuery } from "utils/baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const helpCenter = createApi({
  baseQuery: baseQuery,
  reducerPath: "helpCenter",
  endpoints: (build) => ({
    getFaqs: build.query({
      query() {
        return {
          url: `/faq/?page=1&records=10`,
          method: "GET",
        };
      },
    }),
    postQuery: build.mutation({
      query(body) {
        return {
          url: `/help/`,
          method: "POST",
          body
        };
      },
    }),
  }),
});

export const { useGetFaqsQuery, usePostQueryMutation } = helpCenter;
