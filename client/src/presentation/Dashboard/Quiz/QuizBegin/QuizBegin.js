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
      answers: [],
      userAnswers:[]
    }
  }

  getUserAnswer = (qNum, answer) => {
    let obj = {
      qNum,
      answer
    }

    console.log(obj);
    // push this into userAnswers
    
    /* try using something like this: https://stackoverflow.com/questions/26253351/correct-modification-of-state-arrays-in-reactjs
    to get answers
    */
    // if(!this.state.userAnswers[qNum]){
      
    // }
    if(!this.state.userAnswers[qNum]){
      this.setState(prevState => ({
        userAnswers: [...prevState.userAnswers, obj]
      }))
    }
    

  }

  submitAnswers = () => {
    // compare answers and user answers
    console.log(this.state.userAnswers);
    console.log('you submitted answers');
  }

  componentDidMount(){
    let quizId = this.props.match.params.id;
    fetchQuizQuestions(quizId).then((result) => {
      console.log(result.data);
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

  render(){
    return(
      <div id="quiz-landing">
        <h2>Welcome to the <br/>{this.state.name}<br/> Quiz</h2>
        {!this.state.questions.length ? "loading..." :  this.state.questions.map((x,i) =>
        <QuizQuestion
          key={i}
          question={x.question}
          question_number={x.question_number}
          opt1={x.opt1}
          opt2={x.opt2}
          opt3={x.opt3}
          opt4={x.opt4}
          getUserAnswer={this.getUserAnswer}
        />)}
        <button onClick={this.submitAnswers}>Check Score</button>
      </div>
    )
  }
}

export default QuizBegin;