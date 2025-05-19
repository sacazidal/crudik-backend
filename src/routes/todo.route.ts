import type { FastifyInstance } from "fastify";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from "../controllers/todo.controller.js";

export default async function todoRoutes(fastify: FastifyInstance) {
  fastify.get("/todos", getAllTodos);
  fastify.get("/todos/:id", getTodoById);
  fastify.post("/todos", createTodo);
  fastify.put("/todos/:id", updateTodo);
  fastify.delete("/todos/:id", deleteTodo);
}
