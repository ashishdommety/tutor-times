let initial = {
  name: "Unknown",
  google_id: "",
  photo: "via.placeholder.com/200x200",
  title: "tutor",
  subjects: ["french","english","physics"]
}

const profile = function(state = initial, action){
  switch(action.type){
    case "loggedIn":
      return Object.assign({}, state, {name: action.name, picture: action.photo});
    case "userArr":
      return Object.assign({},state, {google_id: action.user.google_id})
  default:
      return state;
  }
}

export default profile;

