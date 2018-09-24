import axios from 'axios';
import fetchUser from '../sync/fetchUser';

const fetchUserAsync = function fetchUserAsync(google_id){
  return function(dispatch){
    axios.get("/user-check")
      .then((response) => {
        let user = response.data;
        console.log(user);
        dispatch(fetchUser(user));
      }).catch(err => console.log(err));
  }
};

export default fetchUserAsync;