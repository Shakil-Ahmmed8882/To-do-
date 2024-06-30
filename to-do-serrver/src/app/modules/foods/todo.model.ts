// Import Mongoose

import { Schema, model } from "mongoose";
import { TTodo } from "./todo.interface";

// Define the TTodo schema
const todoSchema = new Schema<TTodo>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "", 
  },
  isCompleted: {
    type: Boolean,
    default: false, 
  },
  priority: {
    type: String,
    default: 'medium' , 
  },
});

// Create the TTodo model
export const TodoModel = model("Todo", todoSchema);



