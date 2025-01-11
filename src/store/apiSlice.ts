import { AuthResponse, ProfileData, UserCredentials } from "@/types/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend-ashen-seven-22.vercel.app",
  }),
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, UserCredentials>({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation<AuthResponse, UserCredentials>({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
    getProfile: builder.query<ProfileData, void>({
      query: () => ({
        url: "/profile",
        method: "GET",
        headers: {
          Authorization: `${localStorage.getItem("token")}`, // Предполагается, что токен хранится в localStorage
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetProfileQuery } =
  apiSlice;
