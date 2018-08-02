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