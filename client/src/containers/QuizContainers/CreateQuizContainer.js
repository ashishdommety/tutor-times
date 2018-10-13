import { connect } from 'react-redux';
import CreateQuiz from '../../presentation/Dashboard/Quiz/CreateQuiz/CreateQuiz';
import createQuizAction from '../../actionCreators/sync/quiz/createQuizAction/createQuizAction'; 

function mapStateToProps(state){
  return {
    quiz: state.quiz
  }
}

function mapDispatchToProps(dispatch){
  return {
    createQuizAction: (newQuiz) => dispatch(createQuizAction(newQuiz))
  }
}

const CreateQuizContainer = connect(mapStateToProps, mapDispatchToProps)(CreateQuiz);

export default CreateQuizContainer;