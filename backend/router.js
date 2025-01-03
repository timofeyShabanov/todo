import Router from 'express'
import Todo from './Todo.js'

const router = Router();

router.post('/todo', async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    return res.status(201).json(todo);
  } catch (e) {
    return res.status(500).json(e.message)
  }
})

router.get('/todo', async (req, res) => {
  try {
    const allTodos = await Todo.find()
    return res.status(201).json(allTodos);
  } catch (e) {
    return res.status(500).json(e.message)
  }
})

export default router;