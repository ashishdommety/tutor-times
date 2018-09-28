const fetchAllUsers = function(users){
  return {type: 'fetchAllUsers', users}
};

export default fetchAllUsers;