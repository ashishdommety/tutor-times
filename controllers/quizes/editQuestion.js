const db = require("../../models");

module.exports = function(req,res){
  let title = req.params.title;
  let question_number = req.params.qNum;
  let toChange = {question: "What is two plus three?"}; // req.body.updates; 

  db.Quiz.update(
    toChange, // make object value pair more flexible
    {where: 
      {
        title,
        question_number
      }
    }
  ).then((result) => {
    res.json(result);
  }).catch((err) => {
    throw err;
  })
};