import initialState from '../initialState.js';

const assosciates = function(state = initialState, action){
  return Object.assign({},state,{students:action.allStudents});
}

export default assosciates;