import React, {Component} from 'react';
import './QuizHome.css';
import {Link} from 'react-router-dom';
import QuizTile from './QuizTile/QuizTile';
import fetchAllQuizzes from '../../../../actionCreators/async/quiz/fetchAllQuizzes';

/**
 * State Needed - profile.title
 * Behavior needed - fetch all quizes
*/

class QuizHome extends Component{
  constructor(props){
    super(props);

    this.state = {
      quizzes: [],
      status: false
    }
  }

  componentDidMount(){
    fetchAllQuizzes().then((result) => 
      this.setState({
        quizzes: result.data
      })
    ).catch((err) => console.log(err));
  }

  render(){
    return(
      <div id="all-quizes">
        <div id="quiz-options">
          <input placholder="Search for Quizes"></input>
          <button>Search</button>
          { this.props.title !== "student" ? <Link to={this.props.match.path+ "/create"}><button>+</button></Link> : ''}
        </div>
        <div className="quiz-tiles">
        {this.state.quizzes.map((x,i) => 
          <QuizTile 
            key={i}
            profileTitle={this.props.title}
            quizTitle={x.title}
            path={x.path}
            quizId={x.quizId}
            difficulty={x.difficulty}
          />
        )}
        </div>
      </div>
    )
  }
}

export default QuizHome;