const db = require("../../models");
const filterQuestionObjs = require("../../helpers/filterQuestionObjs/filterQuestionObjs");

module.exports = function(req,res){
  db.Quiz.findAll({}).then(result => {
    res.json(filterQuestionObjs(result));
  }).catch(function(err){
    res.json(err);
  }); 
};