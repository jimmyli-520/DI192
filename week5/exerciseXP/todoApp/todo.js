class TodoList {
  constructor() {
    this.tasks = []
  }


  addTask(task) {
    this.tasks.push({ name: task, completed: false })
  }

  markComplete(task) {
    const found = this.tasks.find(t => t.name === task)
    found.completed = true
  }

  listTasks() {
    this.tasks.forEach(t => console.log(t))
  }
}
export default TodoList