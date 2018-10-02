import React, {Component} from 'react';
import './QuizTile.css';

class QuizTile extends Component{
  render(){
    return(
      <div className="quiz-tile">
        <img src="" alt="bg-description"/>
        <h3>{this.props.quizTitle}</h3>
        <p>{this.props.difficulty}</p>
        { this.props.profileTitle !== "student" ? <button>Review</button> : ''}
      </div>
    )
  }
}

export default QuizTile;