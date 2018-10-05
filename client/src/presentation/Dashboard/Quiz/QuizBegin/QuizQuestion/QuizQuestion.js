import React, {Component} from 'react';
import './QuizQuestion.css';

class QuizQuestion extends Component{
  render(){
    return(
      <div>
        <h3>{this.props.question}</h3>
        <div className="optionPairs">
          <div className="options">
            {this.props.opt1}<input type="checkbox" name="opt1" value="opt1" className="answerInput"/>
          </div>
          <div className="options">
            {this.props.opt2}<input type="checkbox" name="opt2" value="opt2" className="answerInput"/>
          </div>
        </div>
        <div className="optionPairs">
          <div className="options">
            {this.props.opt3}<input type="checkbox" name="opt3" value="opt3" className="answerInput"/>
          </div>
          <div className="options">
            {this.props.opt4}<input type="checkbox" name="opt4" value="opt4" className="answerInput"/>
          </div>
        </div>
      </div>
    )
  }
};

export default QuizQuestion;