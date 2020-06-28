 import React from 'react';
import ToDoItem from './ToDoItem';


function ToDOList(props){

let items = [];

for(let i =0; i< props.tasks.length; i++){
items.push(<ToDoItem 
  key={i} 
  index={i}
  data={props.tasks[i]} 
  modifiedTask={props.modifiedTask}
  />)
}

return(
<div>
<h1>Tasks to complete</h1>
{items}

</div>
);

}
export default ToDOList;