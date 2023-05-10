/* eslint-disable*/
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


  function clearAllSelected() {
    let newTasks = tasks.filter(function(task) {
      return task.completed != true;
    })

    for (let i = 0; i < newTasks.length; i += 1) {
     newTasks[i].index = i + 1;
   }

     localStorage.setItem('tasks', JSON.stringify(newTasks));
     window.location.reload();
  }

  function returnNewArrar (event) {
      const target1 = event.target.id;
      const targetIdNumber =parseInt(target1.match(/\d+/)[0], 10);
      const taskIndex = tasks.findIndex(task => task.index === targetIdNumber + 1);
      status(tasks[taskIndex])
      classToggle(event)
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function status(task) {
    if (!task.completed) {
      task.completed = true;
     } else if (task.completed) {
      task.completed = false;
    }
  }
  function classToggle(event) {
    event.target.nextElementSibling.classList.toggle('line-trhough')
    // this.classList.toggle("active");
  }


export {returnNewArrar, clearAllSelected}