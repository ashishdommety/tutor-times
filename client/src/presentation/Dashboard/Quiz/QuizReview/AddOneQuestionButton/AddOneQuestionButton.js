import React, { Component } from 'react';

class AddOneQuestionButton extends Component {
  addNewQuestion = () => {
    let currentQuiz = {
      title: this.props.title,
      question_number: this.props.question_number,
      difficulty: this.props.difficulty,
      grade: this.props.grade
    }

    console.log(currentQuiz);
    this.props.createQuizAction(currentQuiz);
    this.props.history.push("/dashboard/quiz/create/new/new-question");
  }

  render() {
    return (
      <button
        className="green-btn"
        onClick={this.addNewQuestion}>Add Question</button>
    )
  }
};

export default AddOneQuestionButton;