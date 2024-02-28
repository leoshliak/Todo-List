import _ from 'lodash';
import './style.css';


const listLinks = document.querySelectorAll('.list-link');
const addBtn = document.querySelector('.add-button');
const addDialog = document.querySelector('.add-dialog');
const addDialogCloseBtn = document.querySelector('.dialog-close');
const lowPriorityBtn = document.querySelector('.low-priority-pick');
const midPriorityBtn = document.querySelector('.medium-priority-pick');
const highPriorityBtn = document.querySelector('.high-priority-pick');

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
  
  function onAnimationEnd() {
    addDialog.classList.remove('hide');
    addDialog.close();
  
    addDialog.removeEventListener('animationend', onAnimationEnd, false);
  }

 lowPriorityBtn.addEventListener('click', (e) =>{
   e.target.classList.add('low-picked');
   midPriorityBtn.classList.remove('mid-picked');
   highPriorityBtn.classList.remove('high-picked');
 });

midPriorityBtn.addEventListener('click', (e) =>{
  e.target.classList.add('mid-picked');
  lowPriorityBtn.classList.remove('low-picked');
  highPriorityBtn.classList.remove('high-picked');
});

highPriorityBtn.addEventListener('click', (e) =>{
 e.target.classList.add('high-picked');
 midPriorityBtn.classList.remove('low-picked');
 midPriorityBtn.classList.remove('mid-picked');
});


   
      
          
     