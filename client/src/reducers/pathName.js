const pathName = function(state = "/", action){
  switch(action.type){
    case "noUser":
      return action.pathName.path;
    case "userDetails":
      return action.pathName;
    default: 
      return state;
  }
}

export default pathName;

