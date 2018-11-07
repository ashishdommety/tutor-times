import axios from 'axios';
import {fetchUser, noUser} from '../../sync/users/fetchUser';

const fetchUserAsync = function fetchUserAsync(google_id){
  return function(dispatch){
    axios.get("/user-check", {
      params: {
        google_id: google_id
      }
    }).then(function(response){
        let user = response.data;
        // if data has path, dispatch another action.
        if(user.path){
          console.log("doesnt exist in store");
          dispatch(noUser(user, "/sign-up"));
        }else{
          console.log("does exist in store");
          dispatch(fetchUser(user, "/dashboard"));
        }
        // store values in localStorage for later use. See Issue #48.
      }).catch(err => console.log(err));
  }
};

export default fetchUserAsync;