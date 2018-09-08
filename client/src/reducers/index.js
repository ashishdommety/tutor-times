import {combineReducers} from 'redux';

import profile from './profile';
import classes from './classes.js';
import associates from './associates';
import isTutor from './isTutor';

const rootReducer = combineReducers({
  profile,
  classes,
  associates,
  isTutor
});

export default rootReducer;
// function login(state = initialState, action){
//   switch(action.type){
//     case 'loggedIn':
//       console.log(action);
//       return Object.assign({}, state, {name: action.name, picture: action.photo});
//     case 'fetchNextClass':
//       return Object.assign({}, state, 
//         {
//           classes: [...state.classes, 
//             { name: action.next,
//               date: action.date,
//               day: action.day, 
//               time: action.time,
//               photoURL: action.photo 
//             }]
//         });
//     case 'fetchAllStudents':
//       return Object.assign({},state,{students:action.allStudents});
//     default: 
//       return state;
//   }
// }

// export default login;