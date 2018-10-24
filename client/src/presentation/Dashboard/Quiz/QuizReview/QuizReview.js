import React, {Component} from 'react';
import './QuizReview.css';
import fetchQuizQuestions from '../../../../actionCreators/async/quiz/fetchQuizQuestions';
import EditQuestion from './EditQuestion/EditQuestion';

class QuizReview extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: []
    }
  }

  componentDidMount(){
    let titleName = this.props.match.params.name;
    console.log(titleName);
    fetchQuizQuestions(titleName).then((result) => {
      console.log(result.data);
      this.setState({
        questions: result.data
      });
    }).catch((err) => console.log(err));
  }

  render(){
    return(
      <div>
        {!this.state.questions.length ? "loading..." :  this.state.questions.map((x,i) =>
          <EditQuestion
              key={i}
              id={"q"+i}
              question={x.question}
              question_number={x.question_number}
              answer={x.answer}
              opt1={x.opt1}
              opt2={x.opt2}
              opt3={x.opt3}
              opt4={x.opt4}/> 
          )}
      </div>
    )
  }
}

export default QuizReview;