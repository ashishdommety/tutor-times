
const classes = function(state = [], action){
  return [...state, 
        { name: action.next,
          date: action.date,
          day: action.day, 
          time: action.time,
          photoURL: action.photo 
        }];
}

export default classes;