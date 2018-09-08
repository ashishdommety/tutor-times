
const associates = function(state = [], action){
  switch(action.type){
    case "fetchAllStudents":
      return [...action.allStudents];
    default: 
      return state;
  }
}

export default associates;