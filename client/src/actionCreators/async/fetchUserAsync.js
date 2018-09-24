import axios from 'axios';
import fetchUser from '../sync/fetchUser';

const fetchUserAsync = function fetchUserAsync(google_id){
  return function(dispatch){
    axios.get("/user-check", {
      params: {
        google_id: google_id
      }
    }).then((response) => {
        let user = response.data;
        if(user.path){
          window.location.pathname = "/sign-up";
        }else{
           dispatch(fetchUser(user));
           window.location.pathname = "/dashboard";
        }
      }).catch(err => console.log(err));
  }
};

export default fetchUserAsync;