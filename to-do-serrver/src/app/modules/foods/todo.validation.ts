import { z } from "zod";

const createTodoValidationSchema = z.object({
  body: z.object({
    id: z.string(),
    title: z.string().min(1), // Ensures title is a non-empty string
    description: z.string().optional(), // Ensures description is an optional string
    isCompleted: z.boolean().optional(), // Ensures isCompleted is an optional boolean
    priority: z.string().optional(), // Ensures isCompleted is an optional boolean
  }),
});

export const todoValidations = {
  createTodoValidationSchema,
};
