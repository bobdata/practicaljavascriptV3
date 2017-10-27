// Code goes here
// Version 4 Toggle Todos

var todoList = {
  todos: [], 
  displayTodos: function() {
    console.log('my Todos', this.todos)
  },
  
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(postion, todoText) {
    this.todos[postion].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
    
  }
};