import React, { Component } from 'react';
import './NewQuestion.css';
import createQuestion from '../../../../../actionCreators/async/quiz/createQuestion';

class NewQuestion extends Component {
  constructor(props, refs) {
    super(props, refs);
    this.state = {
      google_id: localStorage.google_id,
      question_number: 1,
      image: "",
      title: this.props.quiz.title,
      grade: this.props.quiz.grade,
      difficulty: this.props.quiz.difficulty,
      score: "",
      question: "",
      answer: "",
      opt1: "",
      opt2: "",
      opt3: "",
      opt4: ""
    }
  }

  submitQuestion = (e) => {
    e.preventDefault();
    let question_number;
    if (this.props.quiz.question_number) {
      question_number = this.props.quiz.question_number;
      let copy = this.state;
      copy.question_number = question_number;
      createQuestion(copy)
        .then(result => {
          let path = this.props.quiz.title.toLowerCase().split(" ").join("-");
          console.log(`the path is ${path}`);
          this.props.history.push(`/dashboard/quiz/review/${path}`);
        }).catch(err => console.log(err));
    } else {
      question_number = this.props.count;
      createQuestion(this.state)
        .then(result => {
          this.props.incrementQuestionNumber();
          this.setState({
            question_number,
            score: "",
            question: "",
            answer: "",
            opt1: "",
            opt2: "",
            opt3: "",
            opt4: ""
          });
        }).catch(err => console.log(err));
    }
  }
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    if (!this.props.quiz.questionAmount) {
      return (
        <div className="newQuestionForm">
          <h3>Add Question {this.props.quiz.question_number}</h3>
          <form>
            <input placeholder="question" className="questionInput" ref="qInput" name="question" value={this.state.question} onChange={this.handleInputChange} />
            <input placeholder="answer" className="questionInput" ref="qInput" name="answer" value={this.state.answer} onChange={this.handleInputChange} />
            <input placeholder="score" className="questionInput" ref="qInput" name="score" value={this.state.score} onChange={this.handleInputChange} />
            <input placeholder="opt1" className="questionInput" ref="qInput" name="opt1" value={this.state.opt1} onChange={this.handleInputChange} />
            <input placeholder="opt2" className="questionInput" ref="qInput" name="opt2" value={this.state.opt2} onChange={this.handleInputChange} />
            <input placeholder="opt3" className="questionInput" ref="qInput" name="opt3" value={this.state.opt3} onChange={this.handleInputChange} />
            <input placeholder="opt4" className="questionInput" ref="qInput" name="opt4" value={this.state.opt4} onChange={this.handleInputChange} />
            <button className="green-btn" onClick={this.submitQuestion}>Add Question</button>
          </form>
        </div>
      )
    } else {
      return (
        <div>
          {this.state.question_number > this.props.quiz.questionAmount ? <p>You've completed creating your test!</p> :
            <div className="newQuestionForm">
              <h3>Add A Question</h3>
              <form>
                <input placeholder="question" className="questionInput" ref="qInput" name="question" value={this.state.question} onChange={this.handleInputChange} />
                <input placeholder="answer" className="questionInput" ref="qInput" name="answer" value={this.state.answer} onChange={this.handleInputChange} />
                <input placeholder="score" className="questionInput" ref="qInput" name="score" value={this.state.score} onChange={this.handleInputChange} />
                <input placeholder="opt1" className="questionInput" ref="qInput" name="opt1" value={this.state.opt1} onChange={this.handleInputChange} />
                <input placeholder="opt2" className="questionInput" ref="qInput" name="opt2" value={this.state.opt2} onChange={this.handleInputChange} />
                <input placeholder="opt3" className="questionInput" ref="qInput" name="opt3" value={this.state.opt3} onChange={this.handleInputChange} />
                <input placeholder="opt4" className="questionInput" ref="qInput" name="opt4" value={this.state.opt4} onChange={this.handleInputChange} />
                <button className="green-btn" onClick={this.submitQuestion}>Add Question</button>
              </form>
            </div>
          }

        </div>
      )
    }
  }
}

export default NewQuestion;