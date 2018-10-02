import React, {Component} from 'react';
import './QuizHome.css';
import QuizTile from './QuizTile/QuizTile';

/**
 * State Needed - profile.title
 */

class QuizHome extends Component{

  render(){
    return(
      <div id="all-quizes">
        <div id="quiz-options">
          <input placholder="Search for Quizes"></input>
          {/* Only show buttons if tutor
          <button>+</button> */}
        </div>
        <QuizTile/>
      </div>
    )
  }
}

export default QuizHome;