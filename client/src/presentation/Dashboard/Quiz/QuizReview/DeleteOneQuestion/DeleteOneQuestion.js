import React, {Component} from 'react';
import deleteQuestion from "../../../../../actionCreators/async/quiz/deleteQuestion";

class DeleteOneQuestion extends Component{
  constructor(props){
    super(props);
  }

  deleteQuestion = () => {
    console.log(this.props.question_number);
    let pathArr = this.props.path.split("/");
    let title = pathArr[pathArr.length - 1];
    deleteQuestion(title, this.props.question_number).then((result) => {
      console.log('you deleted this question!');
    }).catch((err) => console.log(err));
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