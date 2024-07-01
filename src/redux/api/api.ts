import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TTodo } from "../features/todoSlice";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7000/api/v1",
  }),
  tagTypes: ['Todo'], // Define tag types
  endpoints: (builder) => ({
    getTaskTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append('priority', priority);
        }
        console.log(params);
        return {
          url: `/todos/`,
          method: "GET",
          params: params
        };
      },
      providesTags: ['Todo'], // Provide tags for caching
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
      invalidatesTags: ['Todo'], // Invalidate tags on mutation
    }),
    updateTodo: builder.mutation({
      query: (props) => {
        const { id, data } = props;
        console.log(id);
        console.log(data);
        return {
          url: `/todos/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ['Todo'], // Invalidate tags on mutation
    }),
  }),
});

export default baseApi


/*
The inferred type of 'useAddTodosMutation' cannot be named without a reference to '../../../node_modules/@reduxjs/toolkit/dist/query/react/buildHooks'. This is likely not portable. A type annotation is necessary.ts(2742)

*/