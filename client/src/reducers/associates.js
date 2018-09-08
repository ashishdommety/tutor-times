import initialState from '../initialState';
console.log(...initialState.associates);
const associates = function(state = initialState.associates, action){
  console.log(action.allStudents);
  if(action.allStudents !== undefined){
    return [...action.allStudents];
  }else{
    return [...state];
  }
}

export default associates;