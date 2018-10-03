const quiz = function(state={}, action){
  switch(action.type){
    case 'createQuiz':
      return action.quizDetails;
    default:
      return state;
  }
}

export default quiz;