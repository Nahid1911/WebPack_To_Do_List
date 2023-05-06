/* eslint-disable*/
import _ from 'lodash';
import './style.css';
import { saveToLocalStorage, addTrash, deleteList } from './functions';

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
      <li id=${i} class ="commonClass">
      <input for ="job${i}" id="inputField" type="checkbox" class ="checkBox">
      <p id ="job${i}" class="pInsideLi">${tasks[i].description}</p>
      <button id="editOrRemoveBtn${i}"  class="btnAll threeDots">
       <i class="fa fa-ellipsis-v"></i>
      </button>
      </li>
    `;

}

const deleteBtn = document.querySelectorAll('[id^="editOrRemoveBtn"]');

deleteBtn.forEach((button) => {
  button.addEventListener('click', addTrash);
});





