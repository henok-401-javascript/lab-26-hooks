import React from 'react';


class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      description: '',
      assigned:'',
      status:'',
      difficulty:0,


    }

  }
  descriptionHandler(e){
this.setState({description:e.target.value});
  }
  assignedHandler(e){
    this.setState({assigned:e.target.value});
  }
  statusHandler(e){
    this.setState({status:e.target.value});
  }
  difficultyHandler(e){
    this.setState({difficulty:e.target.value});
  }
  submitHandler(e){
    console.log('I am on the submit button ' , e);
  }



  render(){
console.log(this.state);
    return(
      <div>
        <label>Task Description :</label>
        <input type="text"
         value={this.props.description} 
         onChange={this.descriptionHandler.bind(this)}
         ></input>
                        
  <label>Assigned To :</label>
  <input type="text"
  value={this.props.assigned}
  onChange={this.assignedHandler.bind(this)}>
  </input>
  
        <label>Status :</label>
        <select onChange={this.statusHandler.bind(this)}>
        <option value={this.props.status}>complete</option>
        <option value={this.props.status}>InComplete</option>
        </select>



  <label>Difficulty :</label>
  <select onChange={this.difficultyHandler.bind(this)}>
  <option value={this.props.difficulty}>1</option>
  <option value={this.props.difficulty}>2</option>
  <option value={this.props.difficulty}>3</option>
  <option value={this.props.difficulty}>4</option>
  <option value={this.props.difficulty}>5</option> 
  </select>
  
        
  <button onClick={this.submitHandler.bind(this)}>Submit</button>
      </div>
    );
  }
    
 

}

export default Form;