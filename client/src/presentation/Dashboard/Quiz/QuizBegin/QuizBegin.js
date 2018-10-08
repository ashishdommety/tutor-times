import React, {Component} from 'react';
import './QuizBegin.css';
import fetchQuizQuestions from '../../../../actionCreators/async/quiz/fetchQuizQuestions';
import QuizQuestion from './QuizQuestion/QuizQuestion';

class QuizBegin extends Component {
  constructor(props,match){
    super(props,match);
    this.state={
      name: this.props.match.params.name.split("-").map((x) => x[0].toUpperCase() + x.substring(1,x.length)).join(" "),
      questions: [],
      answers: []
    }
  }

  submitAnswers = () => {
    console.log('you submitted answers');
  }

  componentDidMount(){
    let quizId = this.props.match.params.id;
    fetchQuizQuestions(quizId).then((result) => {
      this.setState({
        questions: result.data,
        answers: result.data.map((x) => x.answer)
      });
    }).catch((err) => console.log(err));
  }

  render(){
    return(
      <div id="quiz-landing">
        <h2>Welcome to the <br/>{this.state.name}<br/> Quiz</h2>
        {!this.state.questions.length ? "loading..." :  this.state.questions.map((x,i) =>
        <QuizQuestion
          key={i}
          question={x.question}
          opt1={x.opt1}
          opt2={x.opt2}
          opt3={x.opt3}
          opt4={x.opt4}
        />)}
        <button onClick={this.submitAnswers}>Check Score</button>
      </div>
    )
  }
}

export default QuizBegin;