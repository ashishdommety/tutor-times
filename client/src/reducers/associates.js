
const associates = function(state = [], action){
  switch(action.type){
    case "fetchAllAssociates":
      return [...action.associates];
    default: 
      return state;
  }
}

export default associates;