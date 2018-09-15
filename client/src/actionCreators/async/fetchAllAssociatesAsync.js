import axios from 'axios';
import fetchAllAssociates from '../sync/fetchAllAssociates';
// const fetchAllAssociates = require('../sync').fetchAllAssociates;

const fetchAllAssociatesAsync = function(){
  return function(dispatch){
    axios.get("/get-associates")
      .then((response) => {
        let associates = response.data.associates;
        dispatch(fetchAllAssociates(associates));
      })
      .catch((err) => {
        console.log(err);
      })
  }
};

export default fetchAllAssociatesAsync;