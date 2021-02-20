/*
// single element
//const form = document.getElementById('todo-form');
const form = document.querySelector("#todo-form");
console.log(form);


// multiple emement
const items = document.querySelectorAll('.item');
items.forEach((item)=>{
    console.log(item);
});
*/


//toDos.remove();
// toDos.lastElementChild.remove();
// toDos.firstElementChild.textContent = 'hello';
// toDos.lastElementChild.innerHTML = '<h1>hello</h1>';
const toDos = document.querySelector('.todo-list');
const btn = document.querySelector('.submit');
const todoInput = document.querySelector('#todo-input');
const msg = document.querySelector('.msg');

btn.addEventListener('click', onSubMit);

function onSubMit(e){
    e.preventDefault();

    if(todoInput.value === ''){
        msg.style.display = 'block';
        setTimeout( ()=> msg.style.display = 'none', 2000);
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add('item');
    toDos.appendChild(li);
    todoInput.value = '';
}