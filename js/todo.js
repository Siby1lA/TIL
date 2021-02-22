const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text){
     const li = document.createElement("li");
     const delBtn = document.createElement("button");
     const span = document.createElement("span");
     const newId = toDos.length + 1;
     delBtn.innerText = "❌";
     span.innerText = text;
     li.appendChild(delBtn);
     li.appendChild(span);
     li.id = newId;
     toDoList.appendChild(li);
     const toDoObj = { 
         text: text,
         id: newId,
     };
     toDos.push(toDoObj);
     saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintTodo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();