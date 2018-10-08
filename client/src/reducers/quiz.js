const quiz = function(state={}, action){
  switch(action.type){
    case 'createQuiz':
      return action.quizDetails;
    case 'addUserAnswer':
      return [...state, action.userAnswer]
    default:
      return state;
  }
}

export default quiz;