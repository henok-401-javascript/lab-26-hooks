import React from 'react';


class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      description: '',
      assigned:'',
      Status:'',
      difficulty:0,


    }

  }

  render(){

    return(
      <div>
        <label>Task Description :</label>
        <input type="text" value={this.props.description} onChange={this.props.descriptionHandler}></input>
                        
  <label>Assigned To :</label>
  <input type="text"
  value={this.props.assigned}
  onChange={this.props.assignedHandler}>
  </input>
  
        <label>Status :</label>
        <select onChange={this.props.statusHandler}>
        <option value={this.props.Status}>complete</option>
        <option value={this.props.Status}>InComplete</option>
        </select>



  <label>Difficulty :</label>
  <select onChange={this.props.difficultyHandler}>
  <option value={this.props.difficulty}>1</option>
  <option value={this.props.difficulty}>2</option>
  <option value={this.props.difficulty}>3</option>
  <option value={this.props.difficulty}>4</option>
  <option value={this.props.difficulty}>5</option> 
  </select>
  
        
  <button onChange={this.props.submitHandler}>Submit</button>
      </div>
    );
  }
    
 

}

export default Form;