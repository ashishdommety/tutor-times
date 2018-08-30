import axios from 'axios';

import * as syncActions from './index';

// console.log(syncActions.getTutorData);

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

export const getTutorDataAsync = function(){
  return function(dispatch){
      axios.get("/test")
      .then((response) => {
        console.log(response.data);
        let data = response.data.home.nextStudent;
        dispatch(syncActions.getTutorData(data.name, data.date, data.day, data.time, data.photoURL));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}