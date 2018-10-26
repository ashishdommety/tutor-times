/*
 *  Controllers Include:-
 *  - Create a new question (POST)
 *  - Edit Question (UPDATE/POST)
 *  - View all Quizes (GET)
 */

const createQuestion = require("./createQuestion");
const findAllQuizzes = require("./findAllQuizzes");
const findOneQuiz = require("./findOneQuiz");
const editQuestion = require("./editQuestion");
const findOneQuestion = require("./findOneQuestion");

module.exports = {
  createQuestion,
  findAllQuizzes,
  findOneQuiz,
  editQuestion,
  findOneQuestion
};