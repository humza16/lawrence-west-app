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
  }),
});

export const { useGetFaqsQuery } = helpCenter;
