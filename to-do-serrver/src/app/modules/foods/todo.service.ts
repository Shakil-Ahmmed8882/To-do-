import QueryBuilder from "../../builder/QueryBuilder";
import { TTodo } from "./todo.interface";
import { TodoModel } from "./todo.model";

const createTodoIntoDB = async (payload: TTodo) => {
  const result = await TodoModel.create(payload);
  return result;
};

const getAllTodosFromDB = async (query: Record<string, unknown>) => {
  const result = new QueryBuilder(TodoModel.find(), query)
    .search(["title"])
    .filter();
  return await result.modelQuery;
};

const updateTodoIntoDB = async (id: string, payload: TTodo) => {
  const result = await TodoModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const todoServices = {
  createTodoIntoDB,
  getAllTodosFromDB,
  updateTodoIntoDB,
};
