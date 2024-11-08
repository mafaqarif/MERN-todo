import axios from "axios";
import { ITodo } from "./types";

const API_URI = "http://localhost:4000/api/todo";

export const fetchTodos = async () => {
  const response = await axios.get<ITodo[]>(API_URI);
  return response.data;
};

export const createTodo = async (title: string) => {
  const response = await axios.post<ITodo>(API_URI, { title });
  return response.data;
};

export const deleteTodo = async (id: string) => {
  const response = await axios.delete(`${API_URI}/${id}`);
  return response.data;
};
