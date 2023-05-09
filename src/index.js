import _ from 'lodash';
import './style.css';
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/fontawesome'

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let inputField = document.getElementById('inputField');

inputField.addEventListener('keyup', function(event) {
  if(event.key === 'Enter'){
    const inputValue = inputField.value;
    const newObj = {
      description : inputValue,
      completed : false,
      index : tasks.length + 1,
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
      <button id="editOrRemoveBtn${i}"  class="btnAll threeDots list-item">
       <i class="fa fa-ellipsis-v"></i>
      </button>
      </li>
    `;

}

function saveToLocalStorage(data) {
  tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.push(data);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


const deleteBtn = document.querySelectorAll('[id^="editOrRemoveBtn"]');
deleteBtn.forEach((button) => {
  button.addEventListener('click', addTrash)
});

function addTrash(event) {
  const eventCatcher = event.target.closest('button');
  eventCatcher.style.display = 'none';
  const liItem = event.target.closest('li');
  const nodeList = liItem.querySelectorAll('p');
  const parentLi = nodeList[0].parentNode;
  let parentId = parentLi.getAttribute('id');
  let parentElement = document.getElementById(parentId);
  let newBtn = document.createElement('button');
  newBtn.className = 'newButton';
  newBtn.innerHTML = '<i class="fa fa-trash-alt"></i>'
  parentElement.append(newBtn)
  liItem.style.backgroundColor = 'rgb(241, 228, 210)';
  const textElem = liItem.querySelector('p');
  textElem.setAttribute('contenteditable', true);
  textElem.focus();
  const trashBtn = document.getElementsByClassName('newButton');
   
    trashBtn[0].addEventListener('click', deleteList);

}

function deleteList() {
  const button = document.querySelectorAll('.newButton');
  const element = button[0].parentNode;
  const liItem = element.parentNode;
  console.log(liItem)
  // const parent = element.parentNode;
  liItem.removeChild(element);
  const listId = element.getAttribute('id');
  tasks.splice(listId, 1);
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  // window.location.reload();
}
const txtEditField = document.querySelectorAll('ul>li p');

txtEditField.forEach((p) => {
  p.addEventListener('keyup', function(event) {
    const updateContent = this.textContent.trim();
    const closestLi = this.closest('li');
    const taskId = closestLi.getAttribute('id');
    const taskIdnumber = parseInt(taskId.replace(/^[A-Z]/, ''), 10);
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    const taskIndex = tasks.findIndex(task => task.index === taskIdnumber + 1);
    tasks[taskIndex].description = updateContent;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const liItem = event.target.closest('li');
    liItem.style.backgroundColor = '#fff';
    const replaceIcon = liItem.querySelectorAll('.list-item');
    replaceIcon[0].style.display = 'flex';
    const replaceTrash = liItem.querySelectorAll('.newButton');
    replaceTrash[0].style.display = 'none';
    window.location.reload();
  })
})