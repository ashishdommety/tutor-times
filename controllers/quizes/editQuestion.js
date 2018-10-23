const db = require("../../models");

module.exports = function(req,res){
  let title = req.params.title;
  let question_number = req.params.qNum;
  let propertyToChange = {question: "What is 2 + 3?"}; // req.body.updates; 

  db.Quiz.update(
    propertyToChange, // make object value pair more flexible
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