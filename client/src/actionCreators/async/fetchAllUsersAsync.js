import axios from 'axios';
import fetchAllUsers from '../sync/fetchAllUsers';

const fetchAllUsersAsync = function(){
  return function(dispatch){
    axios.get("/all-users")
      .then((response) => {
        let users = response.data;
        dispatch(fetchAllUsers(users));
      })
      .catch((err) => {
        console.log(err);
      })
    }
};

export default fetchAllUsersAsync;