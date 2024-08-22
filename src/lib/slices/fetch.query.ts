import { BACKEND_API_URL } from "@/environment";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const customBaseQuery = fetchBaseQuery({
    baseUrl: BACKEND_API_URL,
    prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).token;
    const token=localStorage.getItem("token");
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });