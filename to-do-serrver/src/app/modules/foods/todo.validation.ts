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

const updateTodoValidationSchema = z.object({
  body: z.object({
    id: z.string().optional(),
    title: z.string().min(1).optional(),
    description: z.string().optional().optional(),
    isCompleted: z.boolean().optional().optional(),
    priority: z.string().optional().optional(),
  }),
});

export const todoValidations = {
  createTodoValidationSchema,
  updateTodoValidationSchema
};
