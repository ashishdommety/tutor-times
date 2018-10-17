const quiz = function(state=[], action){
  switch(action.type){
    case 'createQuiz':
      return action.quizDetails;
    case 'addUserAnswer':
      // check all questions to 
      for(let i=0; i<state.length; i++){
        // avoid duplication answers
        if(state[i].qNum === action.userAnswer.qNum && state[i].answer === action.userAnswer.answer){
          console.log('same answer');
          return state;
        }
        // over-write old answers with new ones
        if(state[i].qNum === action.userAnswer.qNum && state[i].answer !== action.userAnswer.answer){
          console.log('new answer');
          // change state to replace current answer with new answer
          let copy = state.slice(0);
          copy.splice(i,1,action.userAnswer);
          return copy;
        }
        
      }
      // add an answer if it doesn't exist
      return [...state, action.userAnswer];
    default:
      return state;
  }
}

export default quiz;