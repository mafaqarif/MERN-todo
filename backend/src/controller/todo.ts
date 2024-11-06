import { Request, Response } from "express";
import Todo, { ITodo } from "../model/Todo";

export const getTodos = async (req: Request, res: Response) => {
  const todos = await Todo.find();
  res.json(todos);
};

export const addTodo = async (req: Request, res: Response) => {
  const newTodo: ITodo = new Todo({ title: req.body.title });
  await newTodo.save();
  res.json(newTodo);
};

export const updateTodo = async (req: Request, res: Response) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTodo);
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Todo Deleted" });
};
