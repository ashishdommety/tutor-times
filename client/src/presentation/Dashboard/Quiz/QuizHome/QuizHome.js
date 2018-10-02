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
          <button>Search</button>

          { this.props.title !== "student" ? <button>+</button> : ''}
        </div>
        <QuizTile title={this.props.title}/>
      </div>
    )
  }
}

export default QuizHome;