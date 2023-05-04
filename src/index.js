/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const inputField = document.getElementById('inputField');
function saveToLocalStorage(data) {
  let tasks = [];
  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(data);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const target = document.getElementById('listContainer');

function displaytasks(task, index) {
  const content = `
      <li class ="commonClass">
      <label class ="checkBoxLabel">
      <input for ="job${index}" id="inputField" type="checkbox" class ="checkBox">
      <p id ="job${index}" class ="pInsideLi">${task.description}</p>
      </label>
      <button  class="btnAll threeDots">
       <i class="fa fa-ellipsis-h"></i>
      </button>
      </li>
    `;
  return content;
}

for (let i = 0; i < tasks.length; i += 1) {
  const task = displaytasks(tasks[i], i);
  target.innerHTML += task;
}

inputField.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const inputValue = inputField.value;
    const newObj = {
      description: inputValue,
      completed: false,
      index: null,
    };
    saveToLocalStorage(newObj);
    window.location.reload();
    inputField.value = '';
  }
});
