import React, {Component} from 'react';
import './EditQuestion.css';

class EditQuestion extends Component{
  render(){
    return(
      <div id={this.props.id} ref={this.props.id} className="review-questions">
        <button className="modify-question-btn">x</button>
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
        <button className="modify-question-btn edit-question-btn">Edit</button>
      </div>
    )
  }
};

export default EditQuestion;