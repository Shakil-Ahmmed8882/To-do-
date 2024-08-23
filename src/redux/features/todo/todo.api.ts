import { baseApi } from "../../api/baseApi";
type TQueryParam = { name: string; value: string };
import { TResponseRedux } from "../../../types/global";

const todoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTaskTodos: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/todos/",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags:["todo"]
    }),

    //   getTaskTodos: builder.query({
    //     query: (priority) => {
    //       const params = new URLSearchParams();
    //       if (priority) {
    //         params.append('priority', priority);
    //       }
    //       console.log(params);
    //       return {
    //         url: `/todos/`,
    //         method: "GET",
    //         params: params
    //       };
    //     },
    //     providesTags: ['todo'],
    //   }),
    addTodos: builder.mutation({
      query: (data) => {
        return {
          url: "/todos/create-todo",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"], 
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
      invalidatesTags: ["todo"],
    }),

    deleteTodo: builder.mutation({
      query: (todoId) => {
        return {
          url: `/todos/${todoId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export default todoApi;
