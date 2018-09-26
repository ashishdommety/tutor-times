const profile = function(state = {}, action){
  switch(action.type){
    case "loggedIn":
      return Object.assign({}, state, {name: action.name, picture: action.photo});
    case "userDetails":
      let title = action.user.isTutor ? "tutor" : "student";
      return Object.assign({},state, {name: action.user.firstName, google_id: action.user.google_id, photo: action.user.photoURL, title})
    case "newUser":
      return Object.assign({}, state, action.newUser)
  default:
      return state;
  }
}

export default profile;

