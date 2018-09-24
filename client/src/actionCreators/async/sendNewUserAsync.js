import axios from 'axios';
// import sendNewUser from '../sync/sendNewUser';

const sendNewUserAsync = function sendNewUserAsync(newUser){
  // console.log(newUser);
  return function(dispatch){
    console.log(newUser);
    axios.post("/create-user", newUser)
      .then((response) => {
        let user = response.data;
        console.log(user);
        // dispatch(sendNewUser(user));
      }).catch(err => console.log(err));
  }
};

export default sendNewUserAsync;