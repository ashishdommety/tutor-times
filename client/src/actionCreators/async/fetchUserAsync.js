import axios from 'axios';
import {fetchUser, noUser} from '../sync/fetchUser';

const fetchUserAsync = function fetchUserAsync(google_id){
  return async function(dispatch){
    axios.get("/user-check", {
      params: {
        google_id: google_id
      }
    }).then( await function(response){
        let user = response.data;
        // if data has path, dispatch another action.
        if(user.path){
          console.log("doesnt exist in store");
          dispatch(noUser(user, "/sign-up"));
        }else{
          console.log("does exist in store");
          dispatch(fetchUser(user, "/dashboard"));
        }
      }).catch(err => console.log(err));
  }
};

export default fetchUserAsync;