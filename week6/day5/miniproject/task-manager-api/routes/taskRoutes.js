const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '../tasks.json');

const getAllTasks = (req, res) => {
  try {
    const data = fs.readFileSync(tasksFilePath, 'utf8');
    const tasks = JSON.parse(data);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error reading tasks' });
  }
};

const getTaskById = (req, res) => {
  try {
    const id = req.params.id;
    const data = fs.readFileSync(tasksFilePath, 'utf8');
    const tasks = JSON.parse(data);

    const task = tasks.find(task => task.id === id);  // find by id

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error reading tasks' });
  }
};

const createTask = (req, res) => {
  try {
    const data = fs.readFileSync(tasksFilePath, 'utf8');
    const tasks = JSON.parse(data);

    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const newTask = { id: Date.now().toString(), title, description };
    tasks.push(newTask);
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: 'Error saving task' });
  }
};

const updateTask = (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const data = fs.readFileSync(tasksFilePath, 'utf8');
    let tasks = JSON.parse(data);

    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Task not found' });
    }

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      title: title || tasks[taskIndex].title,
      description: description || tasks[taskIndex].description
    };

    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
    res.status(200).json(tasks[taskIndex]);
  } catch (err) {
    res.status(500).json({ message: 'Error updating task' });
  }
};

const deleteTask = (req, res) => {
  try {
    const id = req.params.id;
    const data = fs.readFileSync(tasksFilePath, 'utf8');
    const tasks = JSON.parse(data);

    const newTasks = tasks.filter(t => t.id !== id);

    if (tasks.length === newTasks.length) {
      return res.status(404).json({ message: 'Task not found' });
    }

    fs.writeFileSync(tasksFilePath, JSON.stringify(newTasks, null, 2));
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting task' });
  }
};

// Routes
router.get('/', getAllTasks);
router.get('/:id', getTaskById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;