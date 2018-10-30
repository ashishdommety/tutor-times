import React, {Component} from 'react';
import './QuizReview.css';
import fetchQuizQuestions from '../../../../actionCreators/async/quiz/fetchQuizQuestions';
import EditQuestions from './EditQuestions/EditQuestions';
import DeleteQuizButton from './DeleteQuizButton/DeleteQuizButton';
import AddOneQuestion from './AddOneQuestion/AddOneQuestion';

class QuizReview extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: []
    }
  }

  componentDidMount(){
    // console.log(this.props.history);
    let titleName = this.props.match.params.name;
    // console.log(this.props.match.url);
    // console.log(titleName);
    fetchQuizQuestions(titleName).then((result) => {
      // console.log(result.data);
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
        <AddOneQuestion/>
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