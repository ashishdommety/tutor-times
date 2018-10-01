const db = require("../../models");

module.exports = function(req,res){
  // let new_question = req.body;
  let new_question = {
      google_id:"123abc",
      quiz_id: "1432",
      question_number: 1,
      image: "",
      title: "Simple Math",
      grade: 2,
      difficulty: 1,
      score: 3,
      question: "What is 1 + 1?",
      answer: "2"
    };

  db.Quiz.create({
    google_id: new_question.google_id,
    quiz_id: new_question.quiz_id,
    question_number: new_question.question_number,
    image: new_question.image,
    title: new_question.title,
    grade: new_question.grade,
    difficulty: new_question.difficulty,
    score: new_question.score,
    question: new_question.question,
    answer: new_question.answer
  }).then(result => {
    res.json(result);
  }).catch(function(err){
    throw err;
  }); 
};