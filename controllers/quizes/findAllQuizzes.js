const db = require("../../models");

module.exports = function(req,res){
  db.Quiz.findAll({}).then(result => {
    let quizzes = new Set();

    for(let i=0; i< result.length; i++){
      let path = result[i].title.toLowerCase().replace(" ", "-");
      let stage = result[i].difficulty;
      let difficulty;

      if(stage === 1){
        difficulty = "easy";
      }else if(stage === 2){
        difficulty = "average";
      }else if(stage === 3){
        difficulty = "hard";
      }else{
        difficulty = "general";
      }

      quizzes.add({
        quiz_id: result[i].quiz_id,
        title: result[i].title,
        path,
        difficulty
      });
    }

    res.json([...quizzes]);
  }).catch(function(err){
    throw err;
  }); 
};