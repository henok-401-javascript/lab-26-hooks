

import React from 'react';
import ToDoForm from './ToDoForm';


function ToDo(){

  function addTasks(){
    // setStates({addTasks})
  }

  return(
    <Container>
      <ToDoForm addTasks={addTasks}/>
    </Container>
  );
}

export default ToDo;
