import React, {Component} from 'react';
import './QuizQuestion.css';

class QuizQuestion extends Component{

  getAnswer = (e) => {
    //turn all other options of same question to white
    let elements = document.getElementsByClassName(e.target.className);
    for(let i=0; i<elements.length; i++){
      elements[i].style.backgroundColor = "white";
    }

    //turn selected answer bg to green
    e.target.style.backgroundColor = "lightgreen";

    let responseObj = {
      qNum: this.props.question_number,
      answer: e.target.innerText
    }

    this.props.addUserAnswer(responseObj);
  }

  render(){
    return(
      <div id={this.props.id} ref={this.props.id}>
        <h3>{this.props.question_number}. {this.props.question}</h3>
        <div className="optionPairs">
          <div className={`options q${this.props.question_number}-options`} data-target="hi" onClick={this.getAnswer} >
              {this.props.opt1}
          </div>
          <div className={`options q${this.props.question_number}-options`}  onClick={this.getAnswer} >
            {this.props.opt2}
          </div>
        </div>
        <div className="optionPairs" onClick={this.getAnswer} >
          <div className={`options q${this.props.question_number}-options`} >
            {this.props.opt3}
          </div>
          <div className={`options q${this.props.question_number}-options`}  onClick={this.getAnswer} >
            {this.props.opt4}
          </div>
        </div>
      </div>
    )
  }
};

export default QuizQuestion;