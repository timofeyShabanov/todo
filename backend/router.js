import Router from "express";
import Todo from "./Todo.js";

const router = Router();

router.post("/todo", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    return res.status(201).json(todo);
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.get("/todo", async (req, res) => {
  try {
    const allTodos = await Todo.find();
    return res.status(201).json(allTodos);
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

router.put("/todo", async (req, res) => {
  try {
    if (!req.body.id || req.body.done === undefined) {
      return res
        .status(400)
        .json({ message: "ID and done fields are required" });
    }
    const completeTodo = await Todo.findByIdAndUpdate(
      req.body.id,
      {
        done: req.body.done,
      },
      { new: true },
    );
    return res.status(200).json(completeTodo);
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

export default router;
