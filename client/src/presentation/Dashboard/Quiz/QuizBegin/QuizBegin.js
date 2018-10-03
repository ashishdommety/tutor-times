import React, {Component} from 'react';
import './QuizBegin.css';

class QuizBegin extends Component {
  constructor(props,match){
    super(props,match);
    this.state={
      name: this.props.match.params.name.split("-").map((x) => x[0].toUpperCase() + x.substring(1,x.length)).join(" ")
    }
  }
  render(){
    return(
      <div id="quiz-landing">
        <h1>Welcome to {this.state.name} Quiz</h1>
      </div>
    )
  }
}

export default QuizBegin;