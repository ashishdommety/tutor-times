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
      answers: []
    }
  }

  submitAnswers = () => {
    // compare answers and user answers
    console.log('you submitted answers');
    // console.log(this.props.userAnswers);
    // console.log(this.state.answers);
    let key = this.state.answers;
    let responses = this.props.userAnswers;
    let score = 0;
    for(let i=0; i<this.state.questions.length; i++){
      for(let j=0; j<this.state.questions.length; j++){
        if((key[i].qNum === responses[j].qNum) && (key[i].answer === responses[j].answer)){
          score = score += 1;
        }
      }
    }

    console.log("your score is " + score);
    
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