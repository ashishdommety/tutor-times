import React, {Component} from 'react';
import './QuizBegin.css';

class QuizBegin extends Component {
  constructor(props,match){
    super(props,match);
    this.state={
      name: this.props.match.params.name.split("-").map((x) => x[0].toUpperCase() + x.substring(1,x.length)).join(" ")
    }
  }

  /* Fetch data from db about all questions and particular quiz data in this manner:
  ~~
  id: ""
  title: "",
  grade: "",
  difficulty: "",
  questionAmount: "",
  imageUrl: "",
  totalScore: "",
  questions: []
  ~~
  */

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