import { Router } from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controller/todo";

const todoRouter: Router = Router();

todoRouter.get("/", getTodos);
todoRouter.post("/", addTodo);

todoRouter.put("/:id", updateTodo);
todoRouter.delete("/:id", deleteTodo);

export default todoRouter;
