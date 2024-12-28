// Import Mongoose

import { Schema, model } from "mongoose";
import { TTodo } from "./todo.interface";

// Define the TTodo schema
const todoSchema = new Schema<TTodo>({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  isCompleted: { type: Boolean, default: false },
  priority: { type: String, default: "medium" },
  id: { type: String, unique: true }, // Ensure this field is handled correctly
});


// Create the TTodo model
export const TodoModel = model("Todo", todoSchema);



