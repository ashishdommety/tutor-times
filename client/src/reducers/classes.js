import initialState from '../initialState.js';

const classes = function(state = initialState.classes, action){
  return Object.assign({}, state, 
    {
      classes: [...state, 
        { name: action.next,
          date: action.date,
          day: action.day, 
          time: action.time,
          photoURL: action.photo 
        }]
    });
}

export default classes;