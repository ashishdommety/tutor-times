import initialState from '../initialState.js';

function login(state = initialState, action){
  switch(action.type){
    case 'start':
      return Object.assign({}, state, {status: 'loading...'})
    case 'end':
      return Object.assign({}, state, {status: action.message})
    case 'error':
      return Object.assign({}, state, {status: 'error!'})
    case 'loggedIn':
      console.log(action);
      return Object.assign({}, state, {name: action.name, picture: action.photo});
    case 'fetchTutorLandingData':
      return Object.assign({}, state, 
        { home: 
          { nextStudent : 
            { name: action.next,
              date: action.date,
              day: action.day, 
              time: action.time,
              photoURL: action.photo 
            }
          }
        })
    default: 
      return state;
  }
}

export default login;