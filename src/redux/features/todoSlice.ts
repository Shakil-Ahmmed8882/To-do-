import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TTodo = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: string
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      // {title: ... , description:..., isCompleted: ....}
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((todo) => todo.id == action.payload);
    
      if (task) {
        task.isCompleted = !task.isCompleted;
      }

      // Ensure incomplete todo-task on top in list
      state.todos.sort((a, b) => {
        const aCompleted = a.isCompleted ? 1 : 0;
        const bCompleted = b.isCompleted ? 1 : 0;
        return aCompleted - bCompleted;
      });
    },
    },
  
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
