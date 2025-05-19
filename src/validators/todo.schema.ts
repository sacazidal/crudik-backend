import { z } from "zod";

export const createTodoSchema = z.object({
  body: z.object({
    title: z.string(),
  }),
});

export const updateTodoSchema = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
  body: z.object({
    title: z.string().optional(),
    isCompleted: z.boolean().optional(),
  }),
});

export type CreateTodoInput = z.infer<typeof createTodoSchema>;
export type UpdateTodoInput = z.infer<typeof updateTodoSchema>;
