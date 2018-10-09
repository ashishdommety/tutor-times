import React, {Component} from 'react';
import './NewQuestion.css';

class NewQuestion extends Component{
  createQuestionInputs = () => {
    let len = parseInt(this.props.amount);

    let arr = [];
    for(let i=0; i<len; i++){
      arr.push(<div className="newQuestionForm" key={i}>
      <h3>Question {i+1}</h3>
        <input placeholder="question" id={"q" + i} className="questionInput"/>
        <input placeholder="opt1" className="questionInput"/>
        <input placeholder="opt2" className="questionInput"/>
        <input placeholder="opt3" className="questionInput"/>
        <input placeholder="opt4" className="questionInput"/>
        <input placeholder="answer" className="questionInput"/>
      </div>)
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