import React, {Component} from 'react';
import './QuizBegin.css';
import fetchQuizQuestions from '../../../../actionCreators/async/quiz/fetchQuizQuestions';

class QuizBegin extends Component {
  constructor(props,match){
    super(props,match);
    this.state={
      name: this.props.match.params.name.split("-").map((x) => x[0].toUpperCase() + x.substring(1,x.length)).join(" "),
      questions: []
    }
  }

  componentDidMount(){
    let quizId = this.props.match.params.id;
    fetchQuizQuestions(quizId).then((result) => {
      console.log(result.data);
      this.setState({
        questions: result.data
      });
    }).catch((err) => console.log(err));
    
  }

  render(){
    return(
      <div id="quiz-landing">
        <h1>Welcome to the <br/>{this.state.name}<br/> Quiz</h1>
        {/* <Route /> */}
      </div>
    )
  }
}

export default QuizBegin;