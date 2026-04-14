const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items
router.get('/', (req, res) => {
  res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
  const todo = {
    id: todos.length + 1,
    task: req.body.task
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ message: 'To-do item not found' });
  todo.task = req.body.task;
  res.json(todo);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const index = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'To-do item not found' });
  todos.splice(index, 1);
  res.json({ message: 'To-do item deleted' });
});

module.exports = router;