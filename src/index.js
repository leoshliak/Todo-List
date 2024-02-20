import _ from 'lodash';
import './style.css';

 const activeLink = document.querySelector('.active');
const navLinks = document.querySelectorAll('.list-link');

/*navLinks.forEach(addEventListener('click', (e)=>{
activeLink.classList.remove('active');
 e.target.classList.add('active');
 e.target.preventDefault();
}));*/

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
       e.preventDefault();
      navLinks.forEach(link => link.classList.remove('active'));
      e.target.classList.add('active');
    });
  });