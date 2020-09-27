'use strict'
let addTodoForm = document.getElementById('addTodoForm');
let addTodoButton = document.getElementById('addTodoButton');
let todoList = document.getElementById('todoList');

function deleteTodo(e) {
    let listElement = e.target.parentElement;
    todoList.removeChild(listElement);
}

function addTodo(string) {
    let listElement = document.createElement('li');
    let todoText = document.createElement('span');
    todoText.className = 'todoText';
    let deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', deleteTodo)
    todoText.textContent = string;
    listElement.appendChild(deleteButton);
    listElement.appendChild(todoText);
    todoList.appendChild(listElement);
}

addTodoButton.addEventListener('click', function() {
    let task = addTodoForm.value
    if (task == '') return;
    addTodo(task);
    addTodoForm.value = '';
});