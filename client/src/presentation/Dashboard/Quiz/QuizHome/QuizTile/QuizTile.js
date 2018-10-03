import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './QuizTile.css';

class QuizTile extends Component{
  render(){
    return(
      <div className="quiz-tile">
        <img src="" alt="bg-description"/>
        <h3>{this.props.quizTitle}</h3>
        <p>{this.props.difficulty}</p>
        {console.log(this.props)}
        { this.props.profileTitle !== "student" ? <button>Review</button> : <Link to={this.props.quizPath}><button>Take Quiz</button></Link>}
      </div>
    )
  }
}

export default QuizTile;