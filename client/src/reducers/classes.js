
const classes = function(state = [], action){
  switch(action.type){
    case "fetchNextClass":
      return [...state, 
        { name: action.next,
          date: action.date,
          day: action.day, 
          time: action.time,
          photoURL: action.photo 
        }];
    default: 
        return state;
  }
  
}

export default classes;