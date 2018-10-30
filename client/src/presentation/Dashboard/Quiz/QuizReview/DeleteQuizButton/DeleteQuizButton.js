import React, {Component} from 'react';
import deleteQuiz from "../../../../../actionCreators/async/quiz/deleteQuiz";

class DeleteQuizButton extends Component {
  constructor(props){
    super(props);
  }

  deleteOneQuiz = () => {
    deleteQuiz(this.props.title)
      .then((result) => {
        let quizHomeArr = this.props.history.location.pathname.split("/");
        let quizHome = quizHomeArr.splice(0,quizHomeArr.length - 2).join("/")
        this.props.history.push(quizHome);
      }).catch((err) => console.log(err));
  }

  render(){
    return(
      <button onClick={this.deleteOneQuiz}>Delete Quiz</button>
    )
  }
};

export default DeleteQuizButton;
