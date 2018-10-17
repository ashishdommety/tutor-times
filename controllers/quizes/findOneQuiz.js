const db = require("../../models");
const titleCase = require("../../helpers/titleCase/titleCase");

module.exports = function(req,res){
  console.log(req.params);
  let title = titleCase(req.params.title); // get from req.body.params
  // convert simple-math to Simple Math
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