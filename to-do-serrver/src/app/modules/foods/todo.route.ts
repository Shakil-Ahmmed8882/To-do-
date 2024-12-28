import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { todoControllers } from "./todo.controller";
import { todoValidations } from "./todo.validation";

const router = Router();

// Fetch all Todos
router.get("/", todoControllers.getAllTodos);

// Fetch a single Todo by ID
router.get("/:id", todoControllers.getTodoById);

// Create a new Todo
router.post(
  "/create-todo",
  validateRequest(todoValidations.createTodoValidationSchema),
  todoControllers.createTodo
);

// Update an existing Todo by ID
router.put(
  "/:id",
  validateRequest(todoValidations.updateTodoValidationSchema),
  todoControllers.updateTodo
);

// Delete a Todo by ID
router.delete("/:id", todoControllers.deleteTodo);

export const todoRoutes = router;
