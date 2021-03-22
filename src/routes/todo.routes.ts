import { Router } from 'express';
import { Todo } from '../models/todo';
const router = Router();

let todos: Todo[] = [];

router.get('/', (req, res, next) => {
  res.status(200).json({ todos });
});

router.post('/', (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };

  todos.push(newTodo);
  res.status(201).json({ message: 'Added Todo', todo: newTodo, todos });
});

router.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const todoIndex: number = todos.findIndex((todoItem) => todoItem.id === id);
  if (todoIndex >= 0) {
    todos[todoIndex] = {
      id,
      text: req.body.text,
    };
    res.status(200).json({ message: 'Updated todo', todo: todos[todoIndex] });
  }
  res.status(404).json({ message: 'Could not find todo for this id' });
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  todos = todos.filter((todoItem) => todoItem.id !== id);
  res.status(200).json({ message: 'Deleted todo', todos });
});

export default router;
