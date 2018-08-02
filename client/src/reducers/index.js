import initialState from '../initialState.js';

function login(state = initialState, action){
  switch(action.type){
    case 'start':
      return Object.assign({}, state, {status: 'loading...'})
    case 'end':
      return Object.assign({}, state, {status: action.message})
    case 'error':
      return Object.assign({}, state, {status: 'error!'})
    default: 
      return state;
  }
}

export default login;