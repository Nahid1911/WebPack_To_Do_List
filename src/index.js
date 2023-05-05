/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';

const tasks = [{ description: 'wash the dishes', completed: false, index: 0 },
  { description: 'complete To Do list project', completed: false, index: 1 }];

const target = document.getElementById('mainContainer');

target.innerHTML = `
<div class="commonClass">
<p>Today's To Do</p>
<button class="btnAll">
  <i class="fas fa-sync-alt"></i>
</button>

</div>
<div class="commonClass">
<input id="inputField" type="text" class="textInput" placeholder="Add to your list..."/>
<button  class="btnAll threeDots">
  <i class="fa fa-ellipsis-h"></i>
</button>
</div>
<ul id="listContainer">
<li class ="commonClass">
<label class ="checkBoxLabel">
<input for ="job" id="inputField" type="checkbox" class ="checkBox">
<p id ="job" class ="pInsideLi">${tasks[0].description}</p>
</label>
<button  class="btnAll threeDots">
 <i class="fa fa-ellipsis-h"></i>
</button>
</li>
<li class ="commonClass">
<label class ="checkBoxLabel">
<input for ="job2" id="inputField" type="checkbox" class ="checkBox">
<p id ="job2" class ="pInsideLi">${tasks[1].description}</p>
</label>
<button  class="btnAll threeDots">
 <i class="fa fa-ellipsis-h"></i>
</button>
</ul>

<div class="commonClass clearBtnDiv" >
<button class="btnCompleteAll"><p>Clear all completed</p></button>
</div>
`;
