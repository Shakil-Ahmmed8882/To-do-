import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { todoControllers } from "./todo.controller";
import { todoValidations } from "./todo.validation";

const router = Router();

router.get("/", todoControllers.getAllTodos);
router.post(
  "/create-todo",
  validateRequest(todoValidations.createTodoValidationSchema),
  todoControllers.createTodo
);

router.put(
  "/:id",
  validateRequest(todoValidations.updateTodoValidationSchema),
  todoControllers.updateTodo
);

export const todoRoutes = router;
