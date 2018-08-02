export const startLogin = function startLogin(){
  return {type: 'start'}
}

export const finLogin = function finLogin(message){
  return {type: 'end', message}
}

export const errLogin = function errLogin(){
  return {type: 'error'}
}