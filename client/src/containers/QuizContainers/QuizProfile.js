import { connect } from 'react-redux';
import Quiz from '../../presentation/Dashboard/Quiz/QuizHome/QuizHome';

function mapStateToProps(state){
  return {
    title: state.profile.title
  }
}

const QuizProfile = connect(mapStateToProps)(Quiz);

export default QuizProfile;