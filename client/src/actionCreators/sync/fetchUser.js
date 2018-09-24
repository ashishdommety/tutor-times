export const fetchUser = function (user, pathName){
  return {type: 'userDetails', user, pathName}
};

export const noUser = function(user, pathName){
  return {type: 'noUser', pathName}
};