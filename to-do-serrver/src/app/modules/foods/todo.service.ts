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
  if (!result) throw new Error(`Todo with id ${id} not found`);
  return result;
};

const getTodoByIdFromDB = async (id: string) => {
  const result = await TodoModel.findById(id);
  if (!result) throw new Error(`Todo with id ${id} not found`);
  return result;
};

const deleteTodoFromDB = async (id: string) => {
  const result = await TodoModel.findByIdAndDelete(id);
  if (!result) throw new Error(`Todo with id ${id} not found`);
  return result;
};


export const todoServices = {
  createTodoIntoDB,
  getAllTodosFromDB,
  updateTodoIntoDB,
  getTodoByIdFromDB,
  deleteTodoFromDB
};
