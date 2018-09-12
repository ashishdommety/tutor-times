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
        let nextClassData = response.data;
        dispatch(syncActions.fetchNextClass(nextClassData));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

export const fetchAllAssociatesAsync = function(){
  return function(dispatch){
    axios.get("/get-associates")
      .then((response) => {
        let associates = response.data.associates;
        dispatch(syncActions.fetchAllAssociates(associates));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}