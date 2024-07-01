import { useState } from "react";
import { TTodo } from "../../redux/features/todoSlice";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import baseApi from "../../redux/api/api";

const TodoContainer = (): JSX.Element => {


  // from server state
  const [priority, setPriority] = useState('')
  const { data, isLoading } = baseApi.useGetTaskTodosQuery(priority)

  if (isLoading) return <p>Loading...</p>;
  const todos = data.data;

  return (
    <div>
      <div className="flex justify-between mb-2">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority}/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 rounded-lg space-y-2">
          {todos?.length ? (
            todos.map((todo:TTodo) => <TodoCard key={todo._id} {...todo} />)
          ) : (
            <div className="flex justify-center items-center p-5 text-2xl font-bold rounded-lg bg-white">
              <p>There is no task pending..</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
