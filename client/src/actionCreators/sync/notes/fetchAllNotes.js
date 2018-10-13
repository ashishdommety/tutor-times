const fetchAllNotes = function(notes){
  return {type: 'fetchAllNotes', notes}
};

export default fetchAllNotes;