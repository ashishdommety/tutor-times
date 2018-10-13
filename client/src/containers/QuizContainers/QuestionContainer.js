import { connect } from 'react-redux';
import QuizQuestion from '../../presentation/Dashboard/Quiz/QuizBegin/QuizQuestion/QuizQuestion';
import addUserAnswer from '../../actionCreators/sync/quiz/addUserAnswer/addUserAnswer';

function mapStateToProps(state){
  return {
    title: state.profile.title
  }
}

function mapDispatchToProps(dispatch){
  return {
    addUserAnswer: (userAnswer) => dispatch(addUserAnswer(userAnswer))
  }
}


const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(QuizQuestion);

export default QuestionContainer;