import axios from 'axios';
import fetchAllNotes from '../sync/fetchAllNotes';

const fetchAllNotesAsync = function(){
  return function(dispatch){
    axios.get("/get-notes")
      .then((response) => {
        let noteData = response.data;
        dispatch(fetchAllNotes(noteData));
      })
    .catch((err)=>{
      console.log(err);
    })
  }
};

export default fetchAllNotesAsync;