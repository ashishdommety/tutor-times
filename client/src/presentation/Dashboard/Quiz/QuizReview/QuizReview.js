import React, {Component} from 'react';
import './QuizReview.css';
import fetchQuizQuestions from '../../../../actionCreators/async/quiz/fetchQuizQuestions';
import EditQuestions from './EditQuestions/EditQuestions';
import DeleteQuizButton from './DeleteQuizButton/DeleteQuizButton';
// import AddOneQuestionButton from './AddOneQuestion/AddOneQuestion';
import AddOneQuestionButtonContainer from '../../../../containers/QuizContainers/AddOneQuestionButtonContainer';

class QuizReview extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: []
    }
  }

  componentDidMount(){
    let titleName = this.props.match.params.name;
    fetchQuizQuestions(titleName).then((result) => {
      this.setState({
        questions: result.data
      });
    }).catch((err) => console.log(err));
  }

  render(){
    return(
      <div id="quizReview">
      
        <DeleteQuizButton 
        title={this.props.match.params.name}
        history={this.props.history}/>
     
      {!this.state.questions.length ? '' : 
        <AddOneQuestionButtonContainer
          title={this.state.questions[0].title}
          question_number={this.state.questions[this.state.questions.length - 1].question_number + 1}
          difficulty={this.state.questions[0].difficulty}
          grade={this.state.questions[0].grade}
          history={this.props.history}
        />
      }
        {!this.state.questions.length ? "loading..." :  
        this.state.questions.map((x,i) =>
            <EditQuestions
                key={i}
                id={"q"+i}
                question={x.question}
                question_number={x.question_number}
                answer={x.answer}
                opt1={x.opt1}
                opt2={x.opt2}
                opt3={x.opt3}
                opt4={x.opt4}
                pagePath={this.props.match.url}
                history={this.props.history}/> 
        )}
      </div>
    )
  }
}

export default QuizReview;