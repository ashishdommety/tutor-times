const db = require("../../models");
const titleCase = require("../../helpers/titleCase/titleCase");

module.exports = function(req,res){

  // convert simple-math to Simple Math
  let title = titleCase(req.params.title);

  db.Quiz.findAll({
    where: {
      title
    }
  }).then(result => {
    res.json(result);
  }).catch(function(err){
    throw err;
  }); 
};