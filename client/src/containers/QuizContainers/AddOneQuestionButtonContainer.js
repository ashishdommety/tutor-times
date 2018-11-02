import {connect} from 'react-redux';
import AddOneQuestionButton from '../../presentation/Dashboard/Quiz/QuizReview/AddOneQuestionButton/AddOneQuestionButton';
import createQuizAction from '../../actionCreators/sync/quiz/createQuizAction/createQuizAction'; 

function mapStateToProps(state){
  return{
    quiz: state.quiz
  } 
};

function mapDispatchToProps(dispatch){
  return{
    createQuizAction: (newQuiz) => dispatch(createQuizAction(newQuiz))
  }
}

const AddOneQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(AddOneQuestionButton);

export default AddOneQuestionContainer;
