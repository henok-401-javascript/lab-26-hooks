

import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
 import ToDoList from './ToDoList';
import { Container } from 'react-bootstrap';


function ToDo(props){
let [tasks , setTasks] = useState([]);
console.log(tasks);
  function addTasks(taskDetail){
     setTasks([...tasks , taskDetail])
  }
  function modifiedTask(index , updatedTask){
    let currentTask = [...tasks];
    currentTask[index] = updatedTask;
    setTasks(currentTask);
  }

useEffect(() =>{
  let Incomplete = 0;

  for(let i = 0; i < tasks.length; i++){
    if(tasks[i].status === 'Incomplete'){
      Incomplete++;
    }
    if(Incomplete === 1){
      document.title = '1 Incomplete task';
    } else if(Incomplete){
      document.title = Incomplete + 'Incomplete';
    }
    else{
      document.title = 'All ToDo task completed';
    }
  }
} , [tasks])
  return(
    <Container>
      <ToDoForm addTasks={addTasks}/>
      <ToDoList tasks={tasks} modifiedTask={modifiedTask} />
    </Container>
  );
}

export default ToDo;




