import axios from 'axios';
import fetchAllClasses from '../sync/fetchAllClasses';

const fetchAllClassesAsync = function(){
  return function(dispatch){
    axios.get("/get-all-classes")
      .then((response) => {
        let classData = response.data;
        dispatch(fetchAllClasses(classData));
      })
      .catch((err) => {
        console.log(err);
      })
  }
};

export default fetchAllClassesAsync;