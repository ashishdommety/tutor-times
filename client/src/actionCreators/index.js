export const startLogin = function startLogin(){
  return {type: 'start'}
}

export const finLogin = function finLogin(message){
  return {type: 'end', message}
}

export const errLogin = function errLogin(){
  return {type: 'error'}
}

export const googleData = function (name, photo){
  return {type: 'loggedIn', name, photo}
}

export const fetchNextClass = function (next, date, day, time, photo){
  return {type: 'fetchNextClass', next:next, date:date, day:day, time:time, photo:photo }
}

export const fetchAllStudents = function(students){
  return {type: 'fetchAllStudents', allStudents: students }
}