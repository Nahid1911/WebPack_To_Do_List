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
    console.log(event);
      const target1 = event.target.id;
      console.log(target1);
      const targetIdNumber =parseInt(target1.match(/\d+/)[0], 10);
      console.log(JSON.stringify(targetIdNumber));
      const taskIndex = tasks.findIndex(task => task.index === targetIdNumber + 1);
      console.log(taskIndex);
      tasks[taskIndex].completed = true;
      const nextElemSinling1 = event.target.nextElementSibling;
      console.log(nextElemSinling1);
      nextElemSinling1.style.textDecoration = 'line-through' ;
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }



export {returnNewArrar, clearAllSelected}