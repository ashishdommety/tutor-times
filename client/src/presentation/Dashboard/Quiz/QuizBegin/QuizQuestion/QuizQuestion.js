import React, {Component} from 'react';
import './QuizQuestion.css';

class QuizQuestion extends Component{
  // when you click on an option
  // change the background color
  // use a callback to add that element to an array

  getAnswer = (e) => {
    e.target.style.backgroundColor = "lightgreen";
    this.props.getUserAnswer(this.props.question_number, e.target.innerText);
  }

  render(){
    return(
      <div>
        <h3>{this.props.question_number}. {this.props.question}</h3>
        <div className="optionPairs">
          <div className="options" onClick={this.getAnswer} >
              {this.props.opt1}
          </div>
          <div className="options" onClick={this.getAnswer} >
            {this.props.opt2}
          </div>
        </div>
        <div className="optionPairs" onClick={this.getAnswer} >
          <div className="options">
            {this.props.opt3}
          </div>
          <div className="options" onClick={this.getAnswer} >
            {this.props.opt4}
          </div>
        </div>
      </div>
    )
  }
};

export default QuizQuestion;