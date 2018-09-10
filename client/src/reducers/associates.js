
const associates = function(state = [], action){
  switch(action.type){
    case "fetchAllAssociates":
      return [...action.allStudents];
    default: 
      return state;
  }
}

export default associates;