import { connect } from 'react-redux';
import QuizQuestion from '../../presentation/Dashboard/Quiz/QuizBegin/QuizQuestion/QuizQuestion';

function mapStateToProps(state){
  return {
    title: state.profile.title
  }
}

const QuestionContainer = connect(mapStateToProps)(QuizQuestion);

export default QuestionContainer;