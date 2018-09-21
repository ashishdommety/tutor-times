const db = require("../../models");

module.exports = function(req,res){
   // placeholder before using req.body.new_user
  let new_user = {
    google_id: "456def",
    firstName: "John", 
    lastName: "Doe", 
    middleName: "", 
    email: "johndoe@gmail.com",
    photoURL: "https://via.placeholder.com/100x100", 
    isTutor: false, 
    bio: "I'm all about awesomeness and learning more things",
    goal: "To get an A in Math", 
    motto: "Anything is possible", 
    phoneNumber: 1234567890
  };
  
  db.User.create({
    google_id: new_user.google_id,
    firstName: new_user.firstName, 
    lastName: new_user.lastName, 
    middleName: new_user.middleName, 
    email: new_user.email,
    photoURL: new_user.photoURL, 
    isTutor: new_user.isTutor, 
    bio: new_user.bio,
    goal: new_user.goal, 
    motto: new_user.motto, 
    phoneNumber: new_user.phoneNumber
  }).then(result => {
    res.json({redirect: "/signin", user_data : result.dataValues});
  }).catch(function(err){
    throw err;
  }); 
};