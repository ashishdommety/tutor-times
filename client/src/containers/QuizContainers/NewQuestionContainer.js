import { connect } from 'react-redux';
import NewQuestion from '../../presentation/Dashboard/Quiz/CreateQuiz/NewQuestion/NewQuestion';
import incrementQuestionNumber from '../../actionCreators/sync/quiz/incrementQuestionNumber/incrementQuestionNumber';

function mapStateToProps(state){
  return {
    quiz: state.quiz,
    count: state.count
  }
}

function mapDispatchToProps(dispatch){
  return {
    incrementQuestionNumber: () => dispatch(incrementQuestionNumber())
  }
}

const QuestionContainer = connect(mapStateToProps, mapDispatchToProps)(NewQuestion);

export default QuestionContainer;