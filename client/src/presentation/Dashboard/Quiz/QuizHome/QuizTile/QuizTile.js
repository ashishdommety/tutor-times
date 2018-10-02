import React, {Component} from 'react';
import './QuizTile.css';

class QuizTile extends Component{
  render(){
    return(
      <div id="quiz-tile">
        <img src="" alt="bg-description"/>
        <h3>Quiz Title</h3>
        <p>Difficulty Level</p>
        {/* if tutor, add this button-  <button>Review</button> */}
      </div>
    )
  }
}

export default QuizTile;