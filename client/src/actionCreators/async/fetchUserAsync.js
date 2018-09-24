import axios from 'axios';
import fetchUser from '../sync/fetchUser';

const fetchUserAsync = function fetchUserAsync(google_id){
  return async function(dispatch){
    axios.get("/user-check", {
      params: {
        google_id: google_id
      }
    }).then((response) => {
        let user = response.data;
        dispatch(fetchUser(user));
      }).catch(err => console.log(err));
  }
};

export default fetchUserAsync;