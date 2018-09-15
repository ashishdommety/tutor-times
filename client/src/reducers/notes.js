const notes = function(state = [], action){
  switch(action.type){
    case 'fetchAllNotes':
      return [...action.notes]
    default: 
      return state;
  }
}

export default notes;