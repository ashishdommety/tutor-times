import React, {Component} from 'react';

class AddOneQuestionButton extends Component{
  constructor(props){
    super(props);
  }

  addNewQuestion = () => {
    let currentQuiz = {
      title: this.props.title,
      question_number: this.props.question_number,
      difficulty: this.props.difficulty,
      grade: this.props.grade
    }

    console.log(currentQuiz);
    this.props.createQuizAction(currentQuiz);
    // this.props.history.push()
  }

  render(){
    return(
      <button onClick={this.addNewQuestion}>Add Question</button>
    )
  }
};

export default AddOneQuestionButton;