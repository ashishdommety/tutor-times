import React, {Component} from 'react';
import './QuizHome.css';
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

          { this.props.title !== "student" ? <button>+</button> : ''}
        </div>
        <QuizTile title={this.props.title}/>
      </div>
    )
  }
}

export default QuizHome;