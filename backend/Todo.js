import mongoose from "mongoose";

const Todo = new mongoose.Schema({
  content: { type: String, required: true },
  done: { type: Boolean, required: true },
});

export default mongoose.model("Todo", Todo, "todos");
