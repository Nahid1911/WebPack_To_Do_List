/* eslint-disable*/
import _ from 'lodash';
import './style.css';
import { saveToLocalStorage, addTrash} from './functions';

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let index = tasks.length+1;

let inputField = document.getElementById('inputField');

inputField.addEventListener('keyup', function(event) {
  if(event.key === 'Enter'){
    const inputValue = inputField.value;
    const newObj = {
      description : inputValue,
      completed : false,
      index : index,
    };
    saveToLocalStorage (newObj);
    window.location.reload();
    inputField.value = '';
  }
 
} );

const target = document.getElementById('listContainer');
for( let i = 0; i < tasks.length; i += 1){
  target.innerHTML += `
      <li id="L${i}" class ="commonClass">
      <input for ="P${i}" id="inputField" type="checkbox" class ="checkBox">
      <p id ="P${i}" class="pInsideLi">${tasks[i].description}</p>
      <button id="editOrRemoveBtn${i}"  class="btnAll threeDots">
       <i class="fa fa-ellipsis-v"></i>
      </button>
      </li>
    `;

}

const deleteBtn = document.querySelectorAll('[id^="editOrRemoveBtn"]');
deleteBtn.forEach((button) => {
  button.addEventListener('click', addTrash)
});

let txtEditField = document.querySelectorAll('ul>li p');

txtEditField.forEach((p)=>{
  p.addEventListener('blur', function(event) {
    const updateContent = this.textContent.trim();
    let closestLi = this.closest('li');
    let taskId = closestLi.getAttribute('id');
    let taskIdnumber = parseInt(taskId.replace(/^[A-Z]/,""),10);
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const taskIndex = tasks.findIndex(task => task.index === taskIdnumber+1);
    tasks[taskIndex].description = updateContent;
    localStorage.setItem('tasks', JSON.stringify(tasks))

  let trashButton = document.getElementsByClassName('fa-trash-alt')
  let tagName = trashButton[0].classList.replace('fa-trash-alt','fa-ellipsis-v');
  window.location.reload();

  })
})

