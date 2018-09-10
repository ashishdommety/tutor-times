export const googleData = function (name, photo){
  return {type: 'loggedIn', name, photo}
}

export const fetchNextClass = function (next, date, day, time, photo){
  return {type: 'fetchNextClass', next:next, date:date, day:day, time:time, photo:photo }
}

export const fetchAllStudents = function(students){
  return {type: 'fetchAllStudents', allStudents: students }
}