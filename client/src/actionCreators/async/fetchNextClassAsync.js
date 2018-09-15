import axios from 'axios';
import fetchNextClass from '../sync/fetchNextClass';

const fetchNextClassAsync = function(){
  return function(dispatch){
      axios.get("/next-class")
      .then((response) => {
        let nextClassData = response.data;
        dispatch(fetchNextClass(nextClassData));
      })
      .catch((err) => {
        console.log(err);
      })
  }
};

export default fetchNextClassAsync;