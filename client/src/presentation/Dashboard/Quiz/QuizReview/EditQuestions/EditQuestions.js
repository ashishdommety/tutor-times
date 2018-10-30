import React, {Component} from 'react';
import './EditQuestions.css';
import EditButton from './EditButton/EditButton';
import DeleteOneQuestion from '../DeleteOneQuestion/DeleteOneQuestion';

class EditQuestions extends Component{
  constructor(props){
    super(props);
    this.state = {
      editClicked: false,
      editingQuestion: 0
    }
  }

  checkOption = (option) => {
    return option === this.props.answer ? <div className="correct-option">{option} is correct</div> : option;
  };

  deleteQuestion = () => {

  }

  getAnswer = () => {
    console.log(this.props.match);
    console.log(this.props.answer);
  }

  render(){
    return(
      <div id={this.props.id} ref={this.props.id} className="review-questions">
        <DeleteOneQuestion 
          qNum={this.props.question_number}
          path={this.props.pagePath}
          history={this.props.history}/>
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
        <EditButton 
          qNum={this.props.question_number}
          path={this.props.pagePath}
          history={this.props.history}/>
      </div>
    )
  }
};

export default EditQuestions;