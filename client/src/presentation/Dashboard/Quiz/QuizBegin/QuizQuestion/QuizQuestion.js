import React, {Component} from 'react';
import './QuizQuestion.css';

class QuizQuestion extends Component{
  render(){
    return(
      <div>
        <h3>{this.props.question_number}. {this.props.question}</h3>
        <div className="optionPairs">
          <div className="options">
              <span>{this.props.opt1}</span><input type="checkbox" name="opt1" value="opt1" className="answerInput"/>
          </div>
          <div className="options">
            <span>{this.props.opt2}</span><input type="checkbox" name="opt2" value="opt2" className="answerInput"/>
          </div>
        </div>
        <div className="optionPairs">
          <div className="options">
            <span>{this.props.opt3}</span><input type="checkbox" name="opt3" value="opt3" className="answerInput"/>
          </div>
          <div className="options">
            <span>{this.props.opt4}</span><input type="checkbox" name="opt4" value="opt4" className="answerInput"/>
          </div>
        </div>
      </div>
    )
  }
};

export default QuizQuestion;