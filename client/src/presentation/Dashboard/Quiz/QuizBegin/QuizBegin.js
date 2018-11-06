import React, { Component } from 'react';
import './QuizBegin.css';
import fetchQuizQuestions from '../../../../actionCreators/async/quiz/fetchQuizQuestions';
import QuizQuestionContainer from '../../../../containers/QuizContainers/QuestionContainer';
import getScore from './helpers/getScore';

class QuizBegin extends Component {
  constructor(props, match) {
    super(props, match);
    this.state = {
      name: this.props.match.params.name.split("-").map((x) => x[0].toUpperCase() + x.substring(1, x.length)).join(" "),
      questions: [],
      answers: [],
      score: 0,
      showScore: false
    }
  }

  submitAnswers = () => {
    let score = getScore(this.state.answers, this.props.userAnswers);
    this.setState(
      {
        score,
        showScore: true
      }
    );
  }

  componentDidMount() {
    let titleName = this.props.match.params.name;
    fetchQuizQuestions(titleName).then((result) => {
      let answerArray = result.data.map((x) => {
        let obj = {
          qNum: x.question_number,
          answer: x.answer
        }
        return obj;
      });

      this.setState({
        questions: result.data,
        answers: answerArray
      });
    }).catch((err) => console.log(err));
  }

  render() {
    return (
      <div id="quiz-landing" className="block">
        <h2>Welcome to the {this.state.name} Quiz!</h2>
        {!this.state.questions.length ? "loading..." : this.state.questions.map((x, i) =>
          <QuizQuestionContainer
            key={i}
            id={"q" + i}
            question={x.question}
            question_number={x.question_number}
            opt1={x.opt1}
            opt2={x.opt2}
            opt3={x.opt3}
            opt4={x.opt4}
          />
        )}
        <button className="blue-btn" onClick={this.submitAnswers}>Check Score</button>
        {this.state.showScore ? <p>You scored <strong>{this.state.score}</strong> out of {this.state.answers.length}</p> : ''}
      </div>
    )
  }
}

export default QuizBegin;