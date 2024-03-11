import _ from 'lodash';
import './style.css';


const listLinks = document.querySelectorAll('.list-link');
const addBtn = document.querySelector('.add-button');
const addDialog = document.querySelector('.add-dialog');
const addDialogCloseBtn = document.querySelector('.dialog-close');
const lowPriorityBtn = document.querySelector('.low-priority-pick');
const midPriorityBtn = document.querySelector('.medium-priority-pick');
const highPriorityBtn = document.querySelector('.high-priority-pick');
const todoContainer = document.querySelector('.tasks');
const lowInput = document.getElementById('low-pr');
const midInput = document.getElementById('mid-pr');
const highInput = document.getElementById('high-pr');
const typeSelector = document.querySelector('#type');
const inputTitle = document.querySelector('#title');
const detailsText = document.querySelector('#details');
const dateInput = document.getElementById('date');
const radioInputs = document.getElementsByName('priority');
const createBtn = document.querySelector('.create-new-btn');
const form = document.querySelector('#form');
const detDialog = document.querySelector('.details-dialog');
const detDialogCloseBtn = document.querySelector('.dialog-close2');
const editDialog = document.querySelector('.edit-dialog');
const editDialogClose = document.querySelector('.dialog-close3');
const eLowPriorityBtn = document.querySelector('.e-low-priority-pick');
const eMidPriorityBtn = document.querySelector('.e-medium-priority-pick');
const eHighPriorityBtn = document.querySelector('.e-high-priority-pick');
const editRadioInputs = document.getElementsByName('e-priority');
const confirmBtn = document.querySelector('.create-new-ebtn');
let activeRadio;
let activeRadio2;


  listLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      listLinks.forEach(link => link.classList.remove('active'));
      e.target.classList.add('active');
    });
  });

  addBtn.addEventListener('click', () =>{
    addDialog.showModal();
  });


  addDialogCloseBtn.addEventListener('click', () => {
    addDialog.classList.add('hide');
    addDialog.addEventListener('animationend', onAnimationEnd, false);
  });
  
 detDialogCloseBtn.addEventListener('click', ()=>{
  detDialog.classList.add('hide2');
  detDialog.addEventListener('animationend', onAnimationEnd2, false);
 });

 editDialogClose.addEventListener('click', ()=>{
  editDialog.classList.add('hide3');
  editDialog.addEventListener('animationend', onAnimationEnd3, false);
 });

  function onAnimationEnd() {
    addDialog.classList.remove('hide');
    addDialog.close();
  
    addDialog.removeEventListener('animationend', onAnimationEnd, false);
  }

  function onAnimationEnd2() {
    detDialog.classList.remove('hide2');
    detDialog.close();
  
    detDialog.removeEventListener('animationend', onAnimationEnd2, false);
  }

  function onAnimationEnd3() {
    editDialog.classList.remove('hide3');
    editDialog.close();
    editDialog.removeEventListener('animationend', onAnimationEnd3, false);
  }
  function onAnimationEnd03() {
    editDialog.classList.remove('hide3');
    editDialog.close();
    location.reload();
    editDialog.removeEventListener('animationend', onAnimationEnd3, false);
  }

 lowPriorityBtn.addEventListener('click', (e) =>{
  if(e.target.classList.contains('p-disabled-low'))return;
   e.target.classList.add('low-picked');
   midPriorityBtn.classList.remove('mid-picked');
   highPriorityBtn.classList.remove('high-picked');
 });

midPriorityBtn.addEventListener('click', (e) =>{
  if(e.target.classList.contains('p-disabled-mid'))return;
  e.target.classList.add('mid-picked');
  lowPriorityBtn.classList.remove('low-picked');
  highPriorityBtn.classList.remove('high-picked');
});
highPriorityBtn.addEventListener('click', (e) =>{
  if(e.target.classList.contains('p-disabled-high'))return;
 e.target.classList.add('high-picked');
 lowPriorityBtn.classList.remove('low-picked');
 midPriorityBtn.classList.remove('mid-picked');
});

eLowPriorityBtn.addEventListener('click', (e) =>{
   e.target.classList.add('low-picked');
   eMidPriorityBtn.classList.remove('mid-picked');
   eHighPriorityBtn.classList.remove('high-picked');
 });

 eMidPriorityBtn.addEventListener('click', (e) =>{
  e.target.classList.add('mid-picked');
  eLowPriorityBtn.classList.remove('low-picked');
  eHighPriorityBtn.classList.remove('high-picked');
});

eHighPriorityBtn.addEventListener('click', (e) =>{
 e.target.classList.add('high-picked');
 eLowPriorityBtn.classList.remove('low-picked');
 eMidPriorityBtn.classList.remove('mid-picked');
});

function getRadioValue() {
  for (let i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].checked) {
      activeRadio = radioInputs[i].value;
    }
  }
}

function getRadioValue2() {
  for (let i = 0; i < editRadioInputs.length; i++) {
    if (editRadioInputs[i].checked) {
      activeRadio2 = editRadioInputs[i].value;
    }
  }
}

typeSelector.addEventListener('change', pickType);

function pickType() {
  if (typeSelector.value == 2) {
    dateInput.setAttribute('disabled', 'disabled');
    dateInput.classList.add('date-disabled');
    lowInput.setAttribute('disabled', 'disabled');
    midInput .setAttribute('disabled', 'disabled');
    highInput.setAttribute('disabled', 'disabled');
    lowPriorityBtn.classList.add('p-disabled-low');
    midPriorityBtn.classList.add('p-disabled-mid');
    highPriorityBtn.classList.add('p-disabled-high');
    lowPriorityBtn.classList.remove('low-picked');
    midPriorityBtn.classList.remove('mid-picked');
    highPriorityBtn.classList.remove('high-picked');
    createBtn.textContent = 'Create Project';
  } else if (typeSelector.value == 1) {
    dateInput.removeAttribute('disabled');
    lowInput.removeAttribute('disabled');
    midInput .removeAttribute('disabled');
    highInput.removeAttribute('disabled');
    dateInput.classList.remove('date-disabled');
    lowPriorityBtn.classList.remove('p-disabled-low');
    midPriorityBtn.classList.remove('p-disabled-mid');
    highPriorityBtn.classList.remove('p-disabled-high');
    createBtn.textContent = 'Add To Do';
  }
}

function updateId() {
  const everyTodo = document.querySelectorAll('.todo');
  for (let i = 0; i < everyTodo.length; i++) {
    everyTodo[i].setAttribute('index', i);
  }
}

let allTodos = [];

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  addToArray() {
    const title = inputTitle.value;
    const description = detailsText.value; 
    const dueDate = dateInput.value;
    const priority = activeRadio;
    allTodos.push(new Todo(title, description, dueDate, priority));
  }

  createTodo(){
    const todoDiv = document.createElement('div');
    todoDiv.setAttribute('index', allTodos.length-1);
    todoDiv.classList.add('todo');
    if(allTodos[allTodos.length - 1].priority == 'low'){
      todoDiv.classList.add('priority-low');
    }else if(allTodos[allTodos.length - 1].priority == 'mid'){
      todoDiv.classList.add('priority-medium')
    }else if(allTodos[allTodos.length - 1].priority == 'high'){
      todoDiv.classList.add('priority-high')
    }
    const todoLeft = document.createElement('div');
    todoLeft.classList.add('todo-left');
    const todoRight = document.createElement('div');
    todoRight.classList.add('todo-right');
     const completeInput = document.createElement('div');
     //completeInput.setAttribute('type', 'checkbox');
     completeInput.classList.add('complete');
     const todoTitle = document.createElement('p');
     todoTitle.classList.add('todo-title');
     todoTitle.textContent = allTodos[allTodos.length - 1].title;
     const  detailsButton = document.createElement('button');
     detailsButton.classList.add('details-btn');
     detailsButton.textContent = 'Details';
     const todoDate = document.createElement('p');
     todoDate.classList.add('date');
     todoDate.textContent = allTodos[allTodos.length - 1].dueDate;
     const editTodo = document.createElement('i');
     editTodo.classList.add('fa-solid');
     editTodo.classList.add('fa-pen-to-square');
     const deleteTodo = document.createElement('i');
     deleteTodo.classList.add('fa-solid');
     deleteTodo.classList.add('fa-trash-can');

     todoContainer.appendChild(todoDiv);
     todoDiv.appendChild(todoLeft)
     todoDiv.appendChild(todoRight);
     todoLeft.appendChild(completeInput);
     todoLeft.appendChild(todoTitle);
     todoRight.appendChild(detailsButton);
     todoRight.appendChild(todoDate)
     todoRight.appendChild(editTodo);
     todoRight.appendChild(deleteTodo);
  }
}

const newTodo = new Todo();

todoContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('complete')) {
    const completeInput = event.target;
    const todoTitle = completeInput.parentElement.querySelector('.todo-title');
    const detailsButton = completeInput.parentElement.nextElementSibling.querySelector('.details-btn');
    const todoDate = completeInput.parentElement.nextElementSibling.querySelector('.date');
    const editTodo = completeInput.parentElement.nextElementSibling.querySelector('.fa-pen-to-square');
    const deleteTodo = completeInput.parentElement.nextElementSibling.querySelector('.fa-trash-can');

    completeInput.classList.toggle('checked');
    todoTitle.classList.toggle('completed-title', completeInput.checked);
    detailsButton.classList.toggle('completed', completeInput.checked);
    todoDate.classList.toggle('completed', completeInput.checked);
    editTodo.classList.toggle('completed', completeInput.checked);
    deleteTodo.classList.toggle('completed', completeInput.checked); 
    
    populateStorage();
  }
  if (event.target.classList.contains('fa-trash-can')) {
    const todoDiv = event.target.parentElement.parentElement;
    const index = parseInt(todoDiv.getAttribute('index'));
    allTodos.splice(index, 1);
    todoContainer.removeChild(todoDiv);
    updateId();
    populateStorage();
  }
  if(event.target.classList.contains('details-btn')){
    const detTitle = document.querySelector('.det-title');
    const detPriority = document.querySelector('.p-text')
    const todoDiv = event.target.parentElement.parentElement;
    const index = parseInt(todoDiv.getAttribute('index'));
    const detDate = document.querySelector('.d-text');
    const detDescription = document.querySelector('.des-text');

    detTitle.textContent = allTodos[index].title;
    if(allTodos[index].priority == 'low'){
      detPriority.textContent = 'Low';
      detPriority.classList.add('low');
    }else if(allTodos[index].priority == 'mid'){
      detPriority.textContent = 'Medium';
      detPriority.classList.add('mid');
    }else if(allTodos[index].priority == 'high'){
      detPriority.textContent = 'High';
      detPriority.classList.add('high');
    }
    detDate.textContent = allTodos[index].dueDate;
    detDescription.textContent = allTodos[index].description;
     
    detDialog.showModal();
  }
  if(event.target.classList.contains('fa-pen-to-square')){
    const todoDiv = event.target.parentElement.parentElement;
    const index = parseInt(todoDiv.getAttribute('index'));
    const editInputTitle = document.querySelector('#e-title');
    const editTextarea = document.querySelector('#e-details');
    const editDate = document.querySelector('#e-date');
    const editLowInput = document.querySelector('#e-low-pr');
    const editMidInput = document.querySelector('#e-mid-pr');
    const editHighInput = document.querySelector('#e-high-pr');
   editInputTitle.value = allTodos[index].title;
   editTextarea.value = allTodos[index].description;
   editDate.value = allTodos[index].dueDate;
   if(allTodos[index].priority == 'low'){
    eLowPriorityBtn.classList.add('low-picked');
    eMidPriorityBtn.classList.remove('mid-picked');
    eHighPriorityBtn.classList.remove('high-picked');
    editLowInput.setAttribute('checked', 'checked');
    editMidInput.removeAttribute('checked');
    editHighInput.removeAttribute('checked');
   }else if(allTodos[index].priority == 'mid'){
    eMidPriorityBtn.classList.add('mid-picked');
    eLowPriorityBtn.classList.remove('low-picked');
    eHighPriorityBtn.classList.remove('high-picked');
    editMidInput.setAttribute('checked', 'checked');
    editLowInput.removeAttribute('checked');
    editHighInput.removeAttribute('checked');
   }else if(allTodos[index].priority == 'high'){
     eHighPriorityBtn.classList.add('high-picked');
     eLowPriorityBtn.classList.remove('low-picked');
     eMidPriorityBtn.classList.remove('mid-picked');
     editHighInput.setAttribute('checked', 'checked');
     editLowInput.removeAttribute('checked')
     editMidInput.removeAttribute('checked');
   }
   confirmBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    getRadioValue2();
    if (!editInputTitle.value ||  !editDate.value || activeRadio2 === undefined || activeRadio2 === null) {
      alert('Please fill out all required fields.');
      return;
    }
    allTodos[index].title = editInputTitle.value;
    allTodos[index].description = editTextarea.value;
    allTodos[index].dueDate = editDate.value;
    allTodos[index].priority = activeRadio2;
    todoDiv.querySelector('.todo-title').textContent = allTodos[index].title;
    todoDiv.querySelector('.date').textContent = allTodos[index].dueDate;
    if(allTodos[index].priority == 'low'){
      todoDiv.classList.add('priority-low');
      todoDiv.classList.remove('priority-medium');
      todoDiv.classList.remove('priority-high');
    }else if(allTodos[index].priority == 'mid'){
      todoDiv.classList.add('priority-medium');
      todoDiv.classList.remove('priority-low');
      todoDiv.classList.remove('priority-high');
    }else if(allTodos[index].priority == 'high'){
      todoDiv.classList.add('priority-high');
      todoDiv.classList.remove('priority-low');
      todoDiv.classList.remove('priority-medium');
    }
    populateStorage();
    editDialog.classList.add('hide3');
    editDialog.addEventListener('animationend', onAnimationEnd03, false); 
  })
    editDialog.showModal();
  }
});



createBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getRadioValue();
  if (!inputTitle.value ||  !dateInput.value || activeRadio === undefined || activeRadio === null) {
    alert('Please fill out all required fields.');
    return;
  }
  newTodo.addToArray();
  newTodo.createTodo();
  form.reset();
  populateStorage();
  
});



if(!localStorage.getItem('todos')){
  populateStorage();
}else{
  remember();
  
}

function populateStorage(){
  localStorage.setItem('todos', JSON.stringify(allTodos));
  localStorage.setItem('tasks', todoContainer.innerHTML);

  remember();
}

function remember(){
  var currentArray = JSON.parse(localStorage.getItem('todos'));
  var currentContent = localStorage.getItem('tasks');

  allTodos = currentArray;
  todoContainer.innerHTML = currentContent;
}

     console.log(allTodos);
     