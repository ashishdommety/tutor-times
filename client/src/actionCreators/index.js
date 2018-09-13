export const googleData = function (name, photo){
  return {type: 'loggedIn', name, photo}
}

export const fetchNextClass = function (nextClass){
  return {type: 'fetchNextClass', nextClass }
}

export const fetchAllAssociates = function(associates){
  return {type: 'fetchAllAssociates', associates }
}

export const fetchAllClasses = function(classes){
  return {type: 'fetchAllClasses', classes}
}