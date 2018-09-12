
const classes = function(state = [], action){
  switch(action.type){
    case "fetchNextClass":
      /* check if student and class details already exist in the array - if they don't return below. If they do, just return state.
        So:
            if(state has identical value of name, class and time in action.nextClass)
              return state;
            else
              return [...state, action.nextClass]
      */  
      return [...state, action.nextClass];
    default: 
        return state;
  }
  
}

export default classes;