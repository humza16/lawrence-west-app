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
                    url: `/api/v1/login`,
                    method: "POST",
                    body
                };
            },
        }),
        signup: build.mutation({
            query(body) {
                return {
                    url: `/api/v1/signup`,
                    method: "POST",
                    body
                };
            },
        }),
    }),
});

export const { useSigninMutation, useSignupMutation } = authApi;
