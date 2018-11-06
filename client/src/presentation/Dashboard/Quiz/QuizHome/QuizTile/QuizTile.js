import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './QuizTile.css';

class QuizTile extends Component {
  render() {
    return (
      <div className="quiz-tile block block-small">
        <img src="" alt="bg-description" />
        <h3>{this.props.quizTitle}</h3>
        <p>{this.props.difficulty}</p>
        {this.props.profileTitle !== "student" ? <Link to={this.props.reviewPath}><button className="blue-btn">Review</button></Link> : <Link to={this.props.quizPath}><button className="blue-btn">Take Quiz</button></Link>}
      </div>
    )
  }
}

export default QuizTile;