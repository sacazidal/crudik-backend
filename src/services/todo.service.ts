import { UpdateTodoInput } from "./../validators/todo.schema.js";
import prisma from "../config/prisma.js";
import { CreateTodoInput } from "../validators/todo.schema.js";

export const todoService = {
  getALlTodos: async () => {
    return await prisma.todo.findMany();
  },
  getTodoById: async (id: number) => {
    return await prisma.todo.findUnique({ where: { id } });
  },
  createTodo: async (data: CreateTodoInput["body"]) => {
    return await prisma.todo.create({ data });
  },
  updateTodo: async ({ params, body }: UpdateTodoInput) => {
    const { id } = params;
    return await prisma.todo.update({ where: { id }, data: body });
  },
  deleteTodo: async (id: number) => {
    return await prisma.todo.delete({ where: { id } });
  },
};
