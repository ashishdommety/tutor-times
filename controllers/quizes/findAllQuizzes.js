const db = require("../../models");

module.exports = function(req,res){
  db.Quiz.findAll({}).then(result => {
    // set empty array
    let quizzes = [];
    // loop through results to create objects of the type we want on the front-end
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
      // create neccessary object
      let obj = {
        quiz_id: result[i].quiz_id,
        title: result[i].title,
        path,
        difficulty
      };
      
      quizzes.push(obj);
    }

    let all = quizzes.filter((obj, pos, arr) => {
      //we get an array of the quiz_ids
      let arrOfIds = arr.map(mapObj => mapObj["quiz_id"]); 
      // then check if the index of the quiz id is equalled to the position
      return arrOfIds.indexOf(obj["quiz_id"]) === pos;
    });

    res.json(all);
  }).catch(function(err){
    res.json(err);
  }); 
};