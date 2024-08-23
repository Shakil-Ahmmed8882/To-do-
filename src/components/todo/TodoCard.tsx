import { DeleteIcon, EditIcon } from "../../assets/icons/Icons";
import todoApi from "../../redux/features/todo/todo.api";
import { Button } from "../ui/button";
import { useState } from "react";

interface TtodoProps {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority?: string;
}

const TodoCard = ({
  _id,
  title,
  description,
  isCompleted,
  priority,
}: TtodoProps): JSX.Element => {
  const [completed, setCompleted] = useState(isCompleted);
  const [updateTodo] = todoApi.useUpdateTodoMutation();
  const [deleteTodo] = todoApi.useDeleteTodoMutation();

  // Toggle the completion state of a todo item
  const toggleState = (_id: string) => {
    setCompleted((prevCompleted) => !prevCompleted);

    const taskData = {
      id: _id,
      data: {
        isCompleted: !completed,
      },
    };

    updateTodo(taskData);
  };

  const handleDeleteTodo = (todoId: string) => {
    deleteTodo(todoId);
  };

  return (
    <div className="!bg-[#1d1e21] border-0 rounded-lg flex items-center justify-between gap-5 p-2  ">
      <input
        onChange={() => toggleState(_id)}
        className="hover:cursor-pointer"
        type="checkbox"
        defaultChecked={isCompleted}
        id={`complete-${_id}`}
      />
      <div className="flex-1">
        <p className="font-semibold text-white">{title}</p>
      </div>
      <div className="flex-1 flex items-center gap-2">
        <>
          <span
            className={`w-3 h-3 rounded-full 
            ${priority === "high" ? "bg-red-500" : null}
            ${priority === "medium" ? "bg-yellow-500" : null}
            ${priority === "low" ? "bg-green-500" : null}
            
            
            
            `}
          ></span>
          <p className="text-white">{priority}</p>
        </>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-400">done</p>
        ) : (
          <p className="text-red-500">pending</p>
        )}
      </div>
      <div className="flex-1 text-[#d6d4d4]">
        <p>{description}</p>
      </div>
      <div className="space-x-4">
        <Button
          onClick={() => handleDeleteTodo(_id)}
          className="bg-transparent"
        >
          <DeleteIcon />
        </Button>
        <Button className="bg-transparent">
          <EditIcon />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
