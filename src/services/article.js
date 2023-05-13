import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const RapidAPI_KEY = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "6d246ae833msha7c03c90bbda885p10481fjsna78d04c4071b"
      );
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=2`,
    }),
  }),
});
export const { useLazyGetSummaryQuery } = articleApi;
