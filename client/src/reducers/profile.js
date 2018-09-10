let initial = {
  name: "Unknown",
  photo: "via.placeholder.com/200x200"
}

const profile = function(state = initial, action){
  switch(action.type){
    case "loggedIn":
      return Object.assign({}, state, {name: action.name, picture: action.photo});
  default:
      return state;
  }
}

export default profile;

