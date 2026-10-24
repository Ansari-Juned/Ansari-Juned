//todo app with add, remove, and list functions

const todoList = [];

function addTodo(item) {
  todoList.push(item);
  console.log(`Added: "${item}"`);
}

function removeTodo(item) {
    if ( index>=0 && index < todoList.length) {
        const removed = todoList.splice(index, 1);
        console.log(`Removed: "${removed[0]}"`);
    } else {
        console.log(`Item not found: "${item}"`);
    }
}

function listTodos() {
  if (todoList.length === 0) {
    console.log("No todos found.");
  } else {
    console.log("Todo List:");
    todoList.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}