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

export const todoServices = {
  createTodoIntoDB,
  getAllTodosFromDB,
};
