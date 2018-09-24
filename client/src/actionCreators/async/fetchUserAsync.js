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
        // if data has path, dispatch another action.
        // if not, dispatch fetchUser
        dispatch(fetchUser(user));
      }).catch(err => console.log(err));
  }
};

export default fetchUserAsync;