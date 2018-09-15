import googleData from '../sync/googleData';

const fetchGoogleData = function fetchGoogleData(name, photo){
  return function(dispatch){
    dispatch(googleData(name, photo));
  }
};

export default fetchGoogleData;