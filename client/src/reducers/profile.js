let initial = {
  name: "Unknown",
  google_id: "",
  photo: "via.placeholder.com/200x200",
  title: "",
  subjects: ["french","english","physics"]
}

const profile = function(state = initial, action){
  switch(action.type){
    case "loggedIn":
      return Object.assign({}, state, {name: action.name, picture: action.photo});
    // case "waitingForUser": 

    case "userDetails":
      if(action.user.path){
        window.location.path = "/sign-up"; // use this to change path?
      }
      let title = action.user.isTutor ? "tutor" : "student";
      return Object.assign({},state, {name: action.user.firstName, google_id: action.user.google_id, photo: action.user.photoURL, title})
    case "newUser":
      return Object.assign({}, state, action.newUser)
  default:
      return state;
  }
}

export default profile;

