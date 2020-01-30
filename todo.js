const todoForm = document.querySelector(".js-todoForm"),
todoInput = todoForm.querySelector('input'),
todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'todos';

let toDos = [];

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanTodos = toDos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    })
    toDos = cleanTodos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintTodo(text){
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.value = "×"
    btn.addEventListener('click',deleteTodo);
    const span = document.createElement("span");
    const newId = toDos.length+1
    span.innerText = text;
    li.appendChild(btn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);
    const toDosObj = {
        text:text,
        id:newId
    }
    toDos.push(toDosObj);
    saveToDos();
}

function handleSubmit(e){
    e.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedTodos = JSON.parse(loadedToDos);
        parsedTodos.map(todo => {paintTodo(todo.text)})
    }
}

function init(){
    loadToDos();
    todoForm.addEventListener("submit",handleSubmit);
}

init();