import { connect } from 'react-redux';
import QuizBegin from '../../presentation/Dashboard/Quiz/QuizBegin/QuizBegin';

function mapStateToProps(state){
  return {
    userAnswers: state.quiz
  }
}

const QuizBeginContainer = connect(mapStateToProps)(QuizBegin);

export default QuizBeginContainer;