import React, {Component} from 'react';
import './QuizReview.css';
import fetchQuizQuestions from '../../../../actionCreators/async/quiz/fetchQuizQuestions';

class QuizReview extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let titleName = this.props.match.params.name;
    console.log(titleName);
  }
  
  render(){
    return(
      <h1>Hi</h1>
    )
  }
}

export default QuizReview;