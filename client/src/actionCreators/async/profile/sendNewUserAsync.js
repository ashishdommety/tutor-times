import axios from 'axios';
import fetchUserAsync from '../users/fetchUserAsync';

const sendNewUserAsync = function sendNewUserAsync(newUser){
  return function(dispatch){
    console.log(newUser);
    axios.post("/create-user", newUser)
      .then(async (response) => {
        let user = response.data.user_data;
        console.log(user);
        await dispatch(fetchUserAsync(user.google_id));
      }).catch(err => console.log(err));
  }
};

export default sendNewUserAsync;