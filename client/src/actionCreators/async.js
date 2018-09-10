import axios from 'axios';

import * as syncActions from './index';

export const fetchGoogleData = function fetchGoogleData(name, photo){
  return function(dispatch){
    dispatch(syncActions.googleData(name, photo));
  }
}

export const fetchNextClassAsync = function(){
  return function(dispatch){
      axios.get("/next-class")
      .then((response) => {
        // console.log(response.data);
        let data = response.data.home.nextStudent;
        dispatch(syncActions.fetchNextClass(data.name, data.date, data.day, data.time, data.photoURL));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export const fetchAllAssociatesAsync = function(){
  return function(dispatch){
    axios.get("/get-students")
      .then((response) => {
        let associates = response.data.students;
        dispatch(syncActions.fetchAllAssociates(associates));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}