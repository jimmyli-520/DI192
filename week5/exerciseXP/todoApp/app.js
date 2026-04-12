import TodoList from './todo.js'
const myList = new TodoList()
myList.addTask('Do homework')
myList.addTask('Do houeswork')
myList.markComplete('Do homework')
myList.listTasks()