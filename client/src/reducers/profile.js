import initialState from '../initialState.js';

const profile = function(state = initialState, action){
  return Object.assign({}, state, {name: action.name, picture: action.photo});
}

export default profile;

