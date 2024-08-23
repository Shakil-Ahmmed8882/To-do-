import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
      todos: todoReducer,
      [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares().concat(baseApi.middleware)
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
