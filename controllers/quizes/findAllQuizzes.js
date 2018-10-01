const db = require("../../models");

module.exports = function(req,res){
  db.Quiz.findAll({}).then(result => {
    res.json(result);
  }).catch(function(err){
    throw err;
  }); 
};