
const classes = function(state = [], action){
  switch(action.type){
    case "fetchNextClass":
      // code-snippet to check if values already exist in the object
      for(let i=0; i<state.length; i++){
        let current = state[i];
        let incoming = action.nextClass;
        if((current.name === incoming.name) && (current.date === incoming.date) && (current.time === incoming.time)){
          return state;
        }
      }

      return [...state, action.nextClass];

    case "fetchAllClasses":
      return [...action.classes];
      
    default: 
        return state;
  }
  
}

export default classes;