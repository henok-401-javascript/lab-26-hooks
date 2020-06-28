//import from todo form 
// should take a single props from
// form 
// should render 

import React from 'react';
import {Form} from 'react-bootstrap';

function ToDoItem(props){
  
  return(
    <div>

    <p>{props.data.description}</p>
    <p>{props.data.assigned}</p>
    <p>{props.data.difficulty}</p>
    
    <Form.Group controlId={"ToDo-status" + props.index}>
  <Form.Label> Status</Form.Label>
    <Form.Check 
 
    value={props.data.status === 'complete'}
     onChange={() =>{
       let newTask = {...props.data};
    newTask.status = 
      newTask.status === 'complete'? 'Incomplete' :'complete'
    props.modifiedTask(props.index , newTask);
     }}
    type="switch" 
    id={'status -switch' + props.index} 
    label={props.data.status} 
    
    />
  </Form.Group>
 
  </div>
)

}

export default ToDoItem;
