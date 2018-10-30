import React, {Component} from 'react';

class AddOneQuestion extends Component{
  constructor(props){
    super(props);
  }

  addNewQuestion = () => {
    console.log('add a new question');
  }

  render(){
    return(
      <button onClick={this.addNewQuestion}>Add Question</button>
    )
  }
};

export default AddOneQuestion;