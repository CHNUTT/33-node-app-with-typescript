"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos });
});
router.post('/', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added Todo', todo: newTodo, todos });
});
router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === id);
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
exports.default = router;
