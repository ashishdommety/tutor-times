import React, {Component} from 'react';
import deleteQuestion from "../../../../../actionCreators/async/quiz/deleteQuestion";

class DeleteOneQuestion extends Component{
  constructor(props){
    super(props);
  }

  deleteQuestion = () => {
    let pathArr = this.props.path.split("/");
    let title = pathArr[pathArr.length - 1];
    deleteQuestion(title, this.props.qNum).then((result) => {
      // re-route to main quiz page (this is temporary. Preferably re-render the page)
      this.props.history.push(this.props.path.split("/").splice(0,3).join("/"));
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