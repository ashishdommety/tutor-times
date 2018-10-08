import React, {Component} from 'react';
import './QuizBegin.css';
import fetchQuizQuestions from '../../../../actionCreators/async/quiz/fetchQuizQuestions';
import QuizQuestionContainer from '../../../../containers/QuizContainers/QuestionContainer';

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
    let obj = { qNum, answer };

    this.setState(prevState => ({
        userAnswers: [...prevState.userAnswers, obj]
      })
    )
    console.log(this.state.userAnswers);
  }

  submitAnswers = () => {
    // compare answers and user answers
    console.log(this.state.userAnswers);
    console.log('you submitted answers');
  }

  componentDidMount(){
    let quizId = this.props.match.params.id;
    fetchQuizQuestions(quizId).then((result) => {
      // console.log(result.data);
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
        <QuizQuestionContainer
            key={i}
            question={x.question}
            question_number={x.question_number}
            opt1={x.opt1}
            opt2={x.opt2}
            opt3={x.opt3}
            opt4={x.opt4}/> 
        )}
        <button onClick={this.submitAnswers}>Check Score</button>
      </div>
    )
  }
}

export default QuizBegin;

// <QuizQuestion
//           key={i}
//           question={x.question}
//           question_number={x.question_number}
//           opt1={x.opt1}
//           opt2={x.opt2}
//           opt3={x.opt3}
//           opt4={x.opt4}
//           getUserAnswer={this.getUserAnswer}
//         />

