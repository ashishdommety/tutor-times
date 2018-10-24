import React, {Component} from 'react';
import './EditQuestion.css';

class EditQuestion extends Component{
  constructor(props){
    super(props);
    this.state = {
      editClicked: false,
      editingQuestion: 0
    }
  }

  editQuestion = () => {
    // toggle edit button to a save button
    // allow users to uncheck an old answer and re-check a new one
    // make options type-able
    // Allow user to edit one question at a time
    console.log('question number');
  }

  checkOption = (option) => {
    return option === this.props.answer ? <div className="correct-option">{option} is correct</div> : option;
  };

  getAnswer = () => {
    console.log(this.props.answer);
  }

  render(){
    return(
      <div id={this.props.id} ref={this.props.id} className="review-questions">
        <button className="modify-question-btn">x</button>
        <h3>{this.props.question_number}. {this.props.question}</h3>
        <div className="optionPairs">
          <div className={`options q${this.props.question_number}-options`} onClick={this.getAnswer} >
              {this.checkOption(this.props.opt1)}
          </div>
          <div className={`options q${this.props.question_number}-options`}  onClick={this.getAnswer} >
            {this.checkOption(this.props.opt2)}
          </div>
        </div>
        <div className="optionPairs" onClick={this.getAnswer} >
          <div className={`options q${this.props.question_number}-options`} >
            {this.checkOption(this.props.opt3)}
          </div>
          <div className={`options q${this.props.question_number}-options`}  onClick={this.getAnswer} >
            {this.checkOption(this.props.opt4)}
          </div>
        </div>
        <button className="modify-question-btn edit-question-btn" onClick={this.editQuestion}>Edit</button>
      </div>
    )
  }
};

export default EditQuestion;