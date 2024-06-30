import { Router } from "express";
import { todoRoutes } from "../app/modules/foods/todo.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/todos",
    route: todoRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
