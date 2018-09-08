
const associates = function(state = [], action){
  console.log(action.allStudents);
  if(action.allStudents !== undefined){
    return [...action.allStudents];
  }else{
    return [...state];
  }
}

export default associates;