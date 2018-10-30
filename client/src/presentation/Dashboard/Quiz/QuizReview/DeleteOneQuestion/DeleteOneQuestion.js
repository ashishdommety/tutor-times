import React, {Component} from 'react';

class DeleteOneQuestion extends Component{
  constructor(props){
    super(props);
  }

  deleteQuestion = () => {
    console.log(this.props.question_number);
    let pathArr = this.props.path.split("/");
    let title = pathArr[pathArr.length - 1];
  };

  render(){
    return(
      <button 
        className="modify-question-btn"
        onClick={this.deleteQuestion}>x</button>
    );
  }
}

export default DeleteOneQuestion;