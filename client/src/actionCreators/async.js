import axios from 'axios';

import * as syncActions from './index';

// console.log(syncActions.fetchNextClass);

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

export const fetchAllStudentsAsync = function(){
  return function(dispatch){
    axios.get("/get-students")
      .then((response) => {
        let students = response.data.students;
        console.log(response.data.students);
        dispatch(syncActions.fetchAllStudents(students));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}