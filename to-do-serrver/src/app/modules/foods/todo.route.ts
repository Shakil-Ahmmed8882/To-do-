import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { todoControllers } from "./todo.controller";
import { todoValidations } from "./todo.validation";

const router = Router();

router.post(
  "/create-todo",
  validateRequest(todoValidations.createTodoValidationSchema),
  todoControllers.createTodo
);
router.get("/", todoControllers.getAllTodos);

export const todoRoutes = router;
