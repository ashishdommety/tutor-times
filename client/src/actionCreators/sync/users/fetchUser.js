export const fetchUser = function (user, pathName){
  console.log(user);
  return {type: 'userDetails', user, pathName}
};

export const noUser = function( pathName){
  return {type: 'noUser', pathName}
};