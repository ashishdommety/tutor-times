const quiz = function(state=[], action){
  switch(action.type){
    case 'createQuiz':
      return action.quizDetails;
    case 'addUserAnswer':
      // check if state has the key-value pair
      // if it doesn't return the below
      for(let i=0; i<state.length; i++){
        if(state[i].qNum === action.userAnswer.qNum){
          return state;
        }
      }
      return [...state, action.userAnswer];
      // else, just return state
    default:
      return state;
  }
}

export default quiz;