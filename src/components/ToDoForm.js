import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';




function ToDoForm(props){
const [description , setDescripton] = useState(props.description);
const [assigned , setAssigned] = useState(props.assigned);

function submitHandler(){
  props.addTasks({
    description,
    assigned,
  
  });
  
  }

  return(
  
    <Form>

  <Form.Group controlId="ToDo-description">
    <Form.Label>Task Description</Form.Label>
  
    <Form.Control type="text" 
    value={description}
    onChange={(e) =>{
      setDescripton(e.target.value);
    }}
    />
  </Form.Group>

  <Form.Group controlId="ToDo-assigned">
    <Form.Label>Assigned To</Form.Label>
    <Form.Control 
    type="text" 
    value={assigned}
    onChange={(e) =>{
      setAssigned(e.target.value);
    }}
    
    />
  </Form.Group>

  <Form.Group controlId="ToDo-status">
  <Form.Label> Status</Form.Label>
    <Form.Check type="switch" label="Check me out" />
  </Form.Group>

 
  <Form.Group controlId="formBasicRange">
    <Form.Label>Difficulty</Form.Label>
    <Form.Control type="range" />
  </Form.Group>

  <Button variant="primary" type="submit"  onClick={submitHandler}>
    Submit
  </Button>

</Form>

  );

}
export default ToDoForm;
