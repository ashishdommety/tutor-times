
const users = function(state = [], action){
  switch(action.type){
    case "fetchAllUsers":
      return action.users;
    default: 
      return state;
  }
}

export default users;