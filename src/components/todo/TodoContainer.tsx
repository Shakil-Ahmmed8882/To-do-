import React, { useRef, useState } from "react";
import { TTodo } from "../../redux/features/todo/todoSlice";
import TodoCard from "./TodoCard";
import Header from "./Header";
import todoApi from "../../redux/features/todo/todo.api";


const TodoContainer = (): JSX.Element => {
  const [priority, setPriority] = useState("");
  const [search, setSearch] = useState("");
  const queryParams = [
    ...(priority ? [{ name: "priority", value: priority }] : []),
    ...(search ? [{ name: "searchTerm", value: search }] : []),
  ];

  const { data, isLoading } = todoApi.useGetTaskTodosQuery(queryParams);

  if (isLoading) return <p>Loading...</p>;
  const todos = data?.data;

  return (
    <div className="">
      <Header {...{ priority, setPriority, setSearch }} />

      <div className="bg-primary-gradient w-full h-full rounded-xl p-[0px]">
        <div className=" bg-[#22252A]  p-5 rounded-lg space-y-4 min-h-screen">
          {todos?.length ? (
            todos.map((todo: TTodo) => <TodoCard key={todo._id} {...todo} />)
          ) : (
            <div className=" flex justify-center items-center p-5 text-2xl font-bold rounded-lg min-h-screen">
              <p className="text-white">There is no task pending..</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;