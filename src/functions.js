
function reassignId() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deleteList(event) {
  const button = event.target;
  const liItem = button.closest('li');
  const parent = liItem.parentNode;
  parent.removeChild(liItem);
  const listId = liItem.getAttribute('id');
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.splice(listId, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  reassignId(tasks);
  window.location.reload();
}

export default function addTrash(event) {
  const liItem = event.target.closest('li');
  liItem.style.backgroundColor = 'rgb(241, 228, 210)';
  const textElem = liItem.querySelector('p');
  textElem.setAttribute('contenteditable', true);
  const replaceIcon = liItem.querySelector('button');
  replaceIcon.innerHTML = '<i id="delete" class="fa fa-trash-alt"></i>';
  textElem.focus();
  const trashBtn = document.getElementById('delete');
  if (trashBtn) {
    trashBtn.removeEventListener('click', addTrash);
    trashBtn.addEventListener('click', deleteList);
  }
}