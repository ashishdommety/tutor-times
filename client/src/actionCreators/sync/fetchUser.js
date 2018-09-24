const fetchUser = function (user){
  return {type: 'userDetails', user}
};

export default fetchUser;