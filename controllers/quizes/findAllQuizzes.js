const db = require("../../models");

module.exports = function(req,res){
  db.Quiz.findAll({}).then(result => {
    let quizzes = new Set();

    for(let i=0; i< result.length; i++){
      let path = result[i].title.toLowerCase().replace(" ", "-");
      quizzes.add({
        quiz_id: result[i].quiz_id,
        title: result[i].title,
        path
      });
    }

    res.json([...quizzes]);
  }).catch(function(err){
    throw err;
  }); 
};