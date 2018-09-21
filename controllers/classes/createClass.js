// google_id, associate_id, email, photoURL, date

const db = require("../../models");

module.exports = function(req,res){
    // temporary to be replaced by req.body.new_class
    let new_class = {
      google_id: "124abc",
      associate_id: "245xyz", 
      email: "cleo@gmail.com",
      photoURL: "https://via.placeholder.com/100x100",
      duration: 1,
      date: "2018-08-15" // temp. This needs to look like: 2018-09-20 13:25:00 
    };
    db.Class.create({
      google_id: new_class.google_id,
      associate_id: new_class.associate_id,
      email: new_class.email,
      photoURL: new_class.photoURL,
      duration: new_class.duration,
      date: new_class.date
    }).then(function(data){
      res.json(data);
    }).catch(err => console.log(err));    
};