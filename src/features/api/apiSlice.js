/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  tagTypes: ["PRODUCT"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: (result = [], error, arg) => [
        "PRODUCT",
        ...result.map(({ id }) => ({ type: "PRODUCT", id })),
      ],
    }),
    getLimitedProducts: builder.query({
      query: () => "/products?limit=5",
      providesTags: (result = [], error, arg) => [
        "PRODUCT",
        ...result.map(({ id }) => ({ type: "PRODUCT", id })),
      ],
    }),
    getProduct: builder.query({
      query: (initialProductId) => `/products/${initialProductId}`,
      providesTags: (result, error, arg) => [{ type: "PRODUCT", id: arg }],
    }),
    getAllCategories: builder.query({
      query: () => "/products/categories",
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetLimitedProductsQuery,
  useGetProductQuery,
  useGetAllCategoriesQuery,
} = apiSlice;
