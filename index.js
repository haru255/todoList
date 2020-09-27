'use strict'
let addTodoForm = document.getElementById('addTodoForm');
let addTodoButton = document.getElementById('addTodoButton');
let todoList = document.getElementById('todoList');

function addTodo(task) {
    let todo = document.createElement('li');
    todo.textContent = task;
    todoList.appendChild(todo);
}

addTodoButton.addEventListener('click', function() {
    let task = addTodoForm.value
    if (task == '') return;
    addTodo(task);
    addTodoForm.value = '';
});