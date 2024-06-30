import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { todoServices } from "./todo.service";

const createTodo = catchAsync(async (req, res) => {
  const food = req.body;
  const result = await todoServices.createTodoIntoDB(food);

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




export const todoControllers = {
  createTodo,
  getAllTodos
};
