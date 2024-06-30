import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TTodo } from "../features/todoSlice";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1",
  }),
  endpoints: (builder) => ({
    getTaskTodos: builder.query({
      query: (priority) => {

        const params = new URLSearchParams()

        if(priority){
          params.append('priority', priority)
        }
        console.log(params)

        return {
          url: `/todos/`,
          method: "GET",
          params:params
        }
      },
    }),
    addTodos: builder.mutation<TTodo, TTodo>({
      query: (data) => {
        console.log("Inside api data => ", data);

        return {
          url: "/todos/create-todo",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetTaskTodosQuery, useAddTodosMutation } = baseApi;
