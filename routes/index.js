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
  .get("/all-users", profile.all) // done
  .get("/user-check", profile.findUser) // done
  .post("/create-user", profile.createUser)
  // associates routes
  .get("/get-associates", associates.all)
  .get("/user-associates", associates.userAssociates)
  // note routes
  .get("/get-notes", notes.userNotes) // temp-done (needs data from front-end)
  // quiz routes
  .post("/create-question", quiz.createQuestion)
  .get("/all-quizzes", quiz.findAllQuizzes)
  .get("/find-one-quiz/:title", quiz.findOneQuiz);

