import _ from 'lodash';
import './style.css';


const listLinks = document.querySelectorAll('.list-link');
const allList = document.getElementById('all');
const todayList = document.getElementById('today');
const weekList = document.getElementById('week');
const importantList = document.getElementById('important');
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
const navList = document.querySelector('.nav-list');
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
    createBtn.textContent = 'create croject';
    createBtn.classList.add('pr');
    createBtn.classList.remove('td')
  } else if (typeSelector.value == 1) {
    dateInput.removeAttribute('disabled');
    lowInput.removeAttribute('disabled');
    midInput .removeAttribute('disabled');
    highInput.removeAttribute('disabled');
    dateInput.classList.remove('date-disabled');
    lowPriorityBtn.classList.remove('p-disabled-low');
    midPriorityBtn.classList.remove('p-disabled-mid');
    highPriorityBtn.classList.remove('p-disabled-high');
    createBtn.textContent = 'add to do';
    createBtn.classList.add('td');
    createBtn.classList.remove('pr');
  }
}

function updateId() {
  const everyTodo = document.querySelectorAll('.todo');
  for (let i = 0; i < everyTodo.length; i++) {
    everyTodo[i].setAttribute('index', i);
  }
}

allList.addEventListener('click', () =>{
  todoContainer.innerHTML = '';
  for(let i = 0; i < allTodos.length; i++){
    populateContainer(i);
  }
  populateStorage();
});

let today = new Date().toJSON().slice(0,10).replace(/-/g,'-');

todayList.addEventListener('click', ()=>{
  todoContainer.innerHTML = '';
  for(let i = 0; i < allTodos.length; i++){
     if(allTodos[i].dueDate == today){
     populateContainer(i);
     }
  }
});

weekList.addEventListener('click', () =>{
todoContainer.innerHTML = '';
 let todayDate = new Date(today);
  for(let i = 0; i < allTodos.length; i++){
    let arrayDate = new Date(allTodos[i].dueDate)
    let differenceInTime = arrayDate.getTime() - todayDate.getTime();
    let differenceInDays = Math.round(differenceInTime / (1000 * 60 * 60 * 24));
     if(differenceInDays <= 7 && differenceInDays >= 0){
      populateContainer(i);
     }
  }
});

importantList.addEventListener('click', () =>{
  todoContainer.innerHTML = '';
  for(let i = 0; i < allTodos.length; i++){
    if(allTodos[i].priority == 'high'){
    populateContainer(i);
    }
  }
});

function populateContainer(i){
  const todoDiv = document.createElement('div');
  todoDiv.setAttribute('index', i);
  todoDiv.classList.add('todo');
  if(allTodos[i].priority == 'low'){
    todoDiv.classList.add('priority-low');
  }else if(allTodos[i].priority == 'mid'){
    todoDiv.classList.add('priority-medium')
  }else if(allTodos[i].priority == 'high'){
    todoDiv.classList.add('priority-high')
  }
  const todoLeft = document.createElement('div');
  todoLeft.classList.add('todo-left');
  const todoRight = document.createElement('div');
  todoRight.classList.add('todo-right');
   const completeInput = document.createElement('div');
   completeInput.classList.add('complete');
   const todoTitle = document.createElement('p');
   todoTitle.classList.add('todo-title');
   todoTitle.textContent = allTodos[i].title;
   const  detailsButton = document.createElement('button');
   detailsButton.classList.add('details-btn');
   detailsButton.textContent = 'Details';
   const todoDate = document.createElement('p');
   todoDate.classList.add('date');
   todoDate.textContent = allTodos[i].dueDate;
   const editTodo = document.createElement('i');
   editTodo.classList.add('fa-solid');
   editTodo.classList.add('fa-pen-to-square');
   const deleteTodo = document.createElement('i');
   deleteTodo.classList.add('fa-solid');
   deleteTodo.classList.add('fa-trash-can');
    if(allTodos[i].complete == 'yes'){
      todoTitle.classList.add('completed-title');
      completeInput.classList.add('checked');
      detailsButton.classList.add('completed');
      todoDate.classList.add('completed');
      editTodo.classList.add('completed');
      deleteTodo.classList.add('completed');
    }
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

let allTodos = [];

class Todo {
  constructor(title, description, dueDate, priority, complete, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
    this.project = project;
  }

  addToArray() {
    const title = inputTitle.value;
    const description = detailsText.value; 
    const dueDate = dateInput.value;
    const priority = activeRadio;
    const complete = 'no';
    const project = document.querySelector('.active').id;
    allTodos.push(new Todo(title, description, dueDate, priority, complete, project));
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
  createProject(){
    const projectContainer = document.querySelector('.nav-list');
    const project = document.createElement('li');
    project.classList.add('list-link');
    project.classList.add('project');
    project.setAttribute('id', inputTitle.value);
    //project.innerHTML = `<span>${inputTitle.value}</span>`;
    const projectSpan = document.createElement('span');
    projectSpan.textContent = `${inputTitle.value}`;
    const deleteProject= document.createElement('i');
    deleteProject.classList.add('fa-regular');
    deleteProject.classList.add('fa-circle-xmark');
    projectContainer.appendChild(project);
    project.appendChild(projectSpan);
    project.appendChild(deleteProject);
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
    const todoDiv = event.target.parentElement.parentElement;
    const index = parseInt(todoDiv.getAttribute('index'));
    completeInput.classList.toggle('checked');
    todoTitle.classList.toggle('completed-title', completeInput.checked);
    detailsButton.classList.toggle('completed', completeInput.checked);
    todoDate.classList.toggle('completed', completeInput.checked);
    editTodo.classList.toggle('completed', completeInput.checked);
    deleteTodo.classList.toggle('completed', completeInput.checked); 
    if(allTodos[index].complete == 'no'){
      allTodos[index].complete = 'yes';
    }else if(allTodos[index].complete == 'yes'){
      allTodos[index].complete = 'no';
    }
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
      detPriority.classList.remove('mid');
      detPriority.classList.remove('high');
    }else if(allTodos[index].priority == 'mid'){
      detPriority.textContent = 'Medium';
      detPriority.classList.add('mid');
      detPriority.classList.remove('low');
      detPriority.classList.remove('high');
    }else if(allTodos[index].priority == 'high'){
      detPriority.textContent = 'High';
      detPriority.classList.add('high');
      detPriority.classList.remove('low');
      detPriority.classList.remove('mid');
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
  if(event.target.classList.contains('fa-circle-xmark')){
    console.log('pon');
  }
});



createBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getRadioValue();
 if(createBtn.classList.contains('td')){
  if (!inputTitle.value ||  !dateInput.value || activeRadio === undefined || activeRadio === null) {
    alert('Please fill out all required fields.');
    return;
  } 
  const listLinks = document.querySelectorAll('.list-link');
  const allList = document.getElementById('all');
  const todayList = document.getElementById('today');
  const weekList = document.getElementById('week');
  const importantList = document.getElementById('important');
  if(todayList.classList.contains('active') || weekList.classList.contains('active') || importantList.classList.contains('active')){
    listLinks.forEach(link => link.classList.remove('active'));
      
      const before = document.createElement('span');
      const after = document.createElement('span');
      
      listLinks.forEach(link => {
        const existingBefore = link.querySelector('.before');
        const existingAfter = link.querySelector('.after');
        if (existingBefore) {
            link.removeChild(existingBefore);
        }
        if (existingAfter) {
            link.removeChild(existingAfter);
        }
        link.appendChild(before.cloneNode());
    link.appendChild(after.cloneNode());
    });
    
      after.classList.add('after');
      allList.classList.add('active');
    todoContainer.innerHTML = '';
    for(let i = 0; i < allTodos.length; i++){
      populateContainer(i);
    }
  }
    newTodo.addToArray();
    newTodo.createTodo();
  }else if(createBtn.classList.contains('pr')){
    if (!inputTitle.value) {
      alert('Please fill out all required fields.');
      return;
    }
    newTodo.createProject();
    location.reload();
  }
  
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
  localStorage.setItem('nav', navList.innerHTML);

  remember();
}

function remember(){
  var currentArray = JSON.parse(localStorage.getItem('todos'));
  var currentContent = localStorage.getItem('tasks');
  var currentNavList = localStorage.getItem('nav');
  allTodos = currentArray;
  todoContainer.innerHTML = currentContent;
  navList.innerHTML = currentNavList;

  const before = document.createElement('span');
  before.classList.add('before');
  const after = document.createElement('span');
  after.classList.add('after');
  
  const listLinks = document.querySelectorAll('.list-link');
  listLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          if (e.target.classList.contains('fa-circle-xmark') && !e.target.classList.contains('active')) {
              return;
          }
          listLinks.forEach(link => link.classList.remove('active'));

          listLinks.forEach(link => {
              const existingBefore = link.querySelector('.before');
              const existingAfter = link.querySelector('.after');
              if (existingBefore) {
                  link.removeChild(existingBefore);
              }
              if (existingAfter) {
                  link.removeChild(existingAfter);
              }
          });
          link.appendChild(before.cloneNode());
          link.appendChild(after.cloneNode());
          link.classList.add('active');
      });
  });

  const allList = document.getElementById('all');
  allList.addEventListener('click', () => {
    todoContainer.innerHTML = '';
    for (let i = 0; i < allTodos.length; i++) {
      populateContainer(i);
    }
    populateStorage();
  });
   
  let today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
  const todayList = document.getElementById('today');
  todayList.addEventListener('click', () => {
    todoContainer.innerHTML = '';
    for (let i = 0; i < allTodos.length; i++) {
      if (allTodos[i].dueDate == today) {
        populateContainer(i);
      }
    }
  });

  const weekList = document.getElementById('week');
  weekList.addEventListener('click', () => {
    todoContainer.innerHTML = '';
    let todayDate = new Date(today);
    for (let i = 0; i < allTodos.length; i++) {
      let arrayDate = new Date(allTodos[i].dueDate);
      let differenceInTime = arrayDate.getTime() - todayDate.getTime();
      let differenceInDays = Math.round(differenceInTime / (1000 * 60 * 60 * 24));
      if (differenceInDays <= 7 && differenceInDays >= 0) {
        populateContainer(i);
      }
    }
  });

  const importantList = document.getElementById('important');
  importantList.addEventListener('click', () => {
    todoContainer.innerHTML = '';
    for (let i = 0; i < allTodos.length; i++) {
      if (allTodos[i].priority == 'high') {
        populateContainer(i);
      }
    }
  });
  const projects = document.querySelectorAll('.project');
  projects.forEach(project =>{
    project.addEventListener('click', (e) =>{
      todoContainer.innerHTML = '';
      for (let i = 0; i < allTodos.length; i++) {
        if (allTodos[i].project == e.target.id) {
          populateContainer(i);
        }
      }
    })
  })

  const parentElement = document.querySelector('.nav-list');

  parentElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-circle-xmark')) {
        const targetProject = e.target.parentElement;
        listLinks.forEach(link => link.classList.remove('active'));
        const before = document.createElement('span');
        const after = document.createElement('span');
        
        listLinks.forEach(link => {
          const existingBefore = link.querySelector('.before');
          const existingAfter = link.querySelector('.after');
          if (existingBefore) {
              link.removeChild(existingBefore);
          }
          if (existingAfter) {
              link.removeChild(existingAfter);
          }
          link.appendChild(before.cloneNode());
          link.appendChild(after.cloneNode());
      });
        allList.classList.add('active');
        parentElement.removeChild(targetProject);
  for (let i = 0; i < allTodos.length; i++) {
    if(allTodos[i].project == targetProject.id){
      allTodos.splice(i, 1);
    }
    populateContainer(i);
  }
   populateStorage()
    }
});
}



     console.log(allTodos);
     