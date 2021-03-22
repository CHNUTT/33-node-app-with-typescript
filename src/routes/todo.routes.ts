import { Router } from 'express';
import { Todo } from '../models/todo';
const router = Router();

let todos: Todo[] = [];
type reqBody = {
  text: string;
};
type reqParams = {
  id: string;
};

router.get('/', (req, res, next) => {
  res.status(200).json({ todos });
});

router.post('/', (req, res, next) => {
  const body = req.body as reqBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };

  todos.push(newTodo);
  res.status(201).json({ message: 'Added Todo', todo: newTodo, todos });
});

router.put('/:id', (req, res, next) => {
  const params = req.params as reqParams;
  const body = req.body as reqBody;
  const todoIndex: number = todos.findIndex(
    (todoItem) => todoItem.id === params.id
  );
  if (todoIndex >= 0) {
    todos[todoIndex] = {
      ...todos[todoIndex],
      text: body.text,
    };
    res.status(200).json({ message: 'Updated todo', todo: todos[todoIndex] });
  }
  res.status(404).json({ message: 'Could not find todo for this id' });
});

router.delete('/:id', (req, res, next) => {
  const params = req.params as reqParams;
  todos = todos.filter((todoItem) => todoItem.id !== params.id);
  res.status(200).json({ message: 'Deleted todo', todos });
});

export default router;
