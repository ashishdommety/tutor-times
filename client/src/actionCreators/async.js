import axios from 'axios';

import * as loginStatus from './index';

export const checkLogin = function checkLogin(){
  return function(dispatch){
    dispatch(loginStatus.startLogin());
    axios.post('/login')
      .then((response) => {
        dispatch(loginStatus.finLogin(response.data.message));
      })
      .catch((err) => {
        dispatch(loginStatus.errLogin());
      })
  }
}

export const fetchGoogleData = function(googleResponse){
  return function(dispatch){
    // check if user exists in db
    // get profile image and name and then change state
    // if they don't, write them in and send them to sign-up form
    // if they do, send them to the Navigation
  }
}