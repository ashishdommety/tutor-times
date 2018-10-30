const router = require('express').Router();

const associates = require("../controllers/associates");
const notes = require("../controllers/notes");
const profile = require("../controllers/profile");
const quiz = require("../controllers/quizes");

/*
 * routes with 'temp-done' status, need data from the front-end to be complete. 
 */

module.exports = router
  // profile routes
  .get("/all-users", profile.all)
  .get("/user-check", profile.findUser)
  .post("/create-user", profile.createUser)
  // associates routes
  // .get("/get-associates", associates.all)
  // .get("/user-associates", associates.userAssociates)
  // note routes
  // .get("/get-notes", notes.userNotes) 
  // quiz routes
  .post("/create-question", quiz.createQuestion)
  .get("/all-quizzes", quiz.findAllQuizzes)
  .post("/edit-question/:title/:qNum", quiz.editQuestion)
  .get("/find-question/:title/:qNum", quiz.findOneQuestion)
  // route for editing quizzes
  .get("/find-one-quiz/:title", quiz.findOneQuiz)
  // route for deleting questions
  .post("/delete-question/:title/:qNum", quiz.deleteQuestion)
  .post("/delete-quiz/:title", quiz.deleteQuiz);

