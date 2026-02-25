const tasks = [];
let nextId = 0;

const form = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const listTasks = document.querySelector('.listTasks');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  addTask();
});

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const task = {
    task_id: nextId++,
    text: text,
    done: false
  };
  tasks.push(task);

  renderTask(task);
  taskInput.value = '';
}

function renderTask(task) {
  // Remove existing clear button if present
  const existingClear = listTasks.querySelector('.clear-btn');
  if (existingClear) existingClear.remove();

  const item = document.createElement('div');
  item.classList.add('task-item');
  item.dataset.taskId = task.task_id;

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
  deleteBtn.addEventListener('click', () => deleteTask(task.task_id));

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `task-${task.task_id}`;
  checkbox.addEventListener('change', () => doneTask(task.task_id));

  // Label
  const label = document.createElement('label');
  label.htmlFor = `task-${task.task_id}`;
  label.textContent = task.text;

  item.appendChild(deleteBtn);
  item.appendChild(checkbox);
  item.appendChild(label);
  listTasks.appendChild(item);

  // Add/re-add clear button at the end
  const clearBtn = document.createElement('button');
  clearBtn.classList.add('clear-btn');
  clearBtn.textContent = 'Clear';
  clearBtn.addEventListener('click', clearAll);
  listTasks.appendChild(clearBtn);
}

function doneTask(id) {
  const task = tasks.find(t => t.task_id === id);
  if (!task) return;
  task.done = !task.done;

  const item = listTasks.querySelector(`[data-task-id="${id}"]`);
  if (item) {
    item.classList.toggle('done', task.done);
    item.querySelector('input[type="checkbox"]').checked = task.done;
  }
}

function deleteTask(id) {
  const index = tasks.findIndex(t => t.task_id === id);
  if (index !== -1) tasks.splice(index, 1);

  const item = listTasks.querySelector(`[data-task-id="${id}"]`);
  if (item) item.remove();

  // Remove clear button if no tasks left
  if (tasks.length === 0) {
    const clearBtn = listTasks.querySelector('.clear-btn');
    if (clearBtn) clearBtn.remove();
  }
}

function clearAll() {
  tasks.length = 0;
  listTasks.innerHTML = '';
}
