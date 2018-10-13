const db = require("../../models");

module.exports = function(req,res){
  let id = req.params.id; // get from req.body.params
  db.Quiz.findAll({
    where: {
      quiz_id: id
    }
  }).then(result => {
    res.json(result);
  }).catch(function(err){
    throw err;
  }); 
};