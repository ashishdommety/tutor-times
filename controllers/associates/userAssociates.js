const db = require("../../models");

module.exports = function(req,res){
    let g_id = "123abc"; // to be replaced by req.body.g_id
    db.Associate.findAll({
      where: {
        google_id: g_id
      }
    }).then(findUser(data)).catch(err => console.log(err));    
};

let findUser = function(data){
  let allAssociates = [];
  for(let i=0; i<data.length; i++){
    db.User.find({
      where: {
        google_id: data[i].associate_google_id
      }
    }).then(function(data){
      allAssociates.push(data);
    })
  }
  res.json(allAssociates);
};