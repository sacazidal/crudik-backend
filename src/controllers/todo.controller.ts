import type { FastifyRequest, FastifyReply } from "fastify";
import { todoService } from "../services/todo.service.js";

export async function getAllTodos(_: FastifyRequest, reply: FastifyReply) {
  const todos = await todoService.getALlTodos();
  return reply.send(todos);
}

export async function getTodoById(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { id } = request.params as { id: string };
  const todo = await todoService.getTodoById(Number(id));
  if (!todo) return reply.code(404).send({ error: "Not found" });
  return reply.send(todo);
}

export async function createTodo(request: FastifyRequest, reply: FastifyReply) {
  const { title } = request.body as { title: string };
  const todo = await todoService.createTodo({ title });
  return reply.code(201).send(todo);
}

export async function updateTodo(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  const data = request.body as { title?: string; completed?: boolean };
  const todo = await todoService.updateTodo({
    params: { id: Number(id) },
    body: data,
  });
  return reply.send(todo);
}

export async function deleteTodo(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string };
  await todoService.deleteTodo(Number(id));
  return reply.code(204).send();
}
