/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const tasks = [{ description: 'wash the dishes', completed: false, index: 0 },
  { description: 'complete To Do list project', completed: false, index: 1 }];

const target = document.getElementById('listContainer');
for (let i = 0; i < tasks.length; i += 1) {
  target.innerHTML += `
<li class ="commonClass">
<label class ="checkBoxLabel">
<input for ="job${tasks[i].index}" id="inputField" type="checkbox" class ="checkBox">
<p id ="job${tasks[i].index}" class ="pInsideLi">${tasks[i].description}</p>
</label>
<button  class="btnAll threeDots">
 <i class="fa fa-ellipsis-h"></i>
</button>
`;
}
