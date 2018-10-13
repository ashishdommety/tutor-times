const quiz = function(state=[], action){
  switch(action.type){
    case 'createQuiz':
      return action.quizDetails;
    case 'addUserAnswer':
      for(let i=0; i<state.length; i++){
        if(state[i].qNum === action.userAnswer.qNum){
          return state;
        }
      }
      return [...state, action.userAnswer];
    default:
      return state;
  }
}

export default quiz;