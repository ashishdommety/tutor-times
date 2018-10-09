import React, {Component} from 'react';
import './NewQuestion.css';

class NewQuestion extends Component{

  addQuestions = () => {
    /* Get all form inputs
       Add them as an array of questions where each object looks like:
        [
          {
            google_id: "",
            quiz_id: ""
            question_number: ""
            image: "",
            title: "",
            grade: "",
            difficulty: "",
            score: "",
            question: "",
            answer: "",
            opt1: "",
            opt2: "",
            opt3: "",
            opt4: ""
          }
        ]
    */
    
  }

  createQuestionInputs = () => {
    let len = parseInt(this.props.amount);

    let arr = [];
    for(let i=0; i<len; i++){
      arr.push(
      <div className="newQuestionForm" key={i}>
        <h3>Question {i+1}</h3>
        <input placeholder="question" id={"q" + i} className="questionInput"/>
        <input placeholder="answer" className="questionInput"/>
        <input placeholder="opt1" className="questionInput"/>
        <input placeholder="opt2" className="questionInput"/>
        <input placeholder="opt3" className="questionInput"/>
        <input placeholder="opt4" className="questionInput"/>
      </div>
      )
    }

    return arr;
  }

  render(){
    return(
      <div>
        {this.createQuestionInputs().map((x) => x)}
        <button>Add Questions</button> 
      </div>
    )
  }
} 

export default NewQuestion;