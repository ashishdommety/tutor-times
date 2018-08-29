import axios from 'axios';

import * as syncActions from './index';

export const checkLogin = function checkLogin(){
  return function(dispatch){
    dispatch(syncActions.startLogin());
    axios.post('/login')
      .then((response) => {
        dispatch(syncActions.finLogin(response.data.message));
      })
      .catch((err) => {
        dispatch(syncActions.errLogin());
      })
  }
}

export const fetchGoogleData = function fetchGoogleData(name, photo){
  return function(dispatch){
    dispatch(syncActions.googleData(name, photo));
  }
}

export const getStuff = function(){
  axios.get("/test")
    .then((response) => {
      console.log(response.data);
      
      // console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
}