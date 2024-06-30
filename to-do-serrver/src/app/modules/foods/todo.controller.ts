import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { todoServices } from "./todo.service";

const createTodo = catchAsync(async (req, res) => {
  const todo = req.body;
  const result = await todoServices.createTodoIntoDB(todo);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todo is created successfully",
    data: result,
  });
});


const getAllTodos = catchAsync(async (req, res) => {
  
  const result = await todoServices.getAllTodosFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "all todos retrieved successfully",
    data: result,
  });
});



const updateTodo = catchAsync(async (req, res) => {
  const todo = req.body;
  const id = req.params.id
  const result = await todoServices.updateTodoIntoDB(id,todo);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Todo is updated successfully",
    data: result,
  });
});

export const todoControllers = {
  createTodo,
  getAllTodos,
  updateTodo
};
