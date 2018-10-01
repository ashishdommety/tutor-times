/*
 *  Controllers Include:-
 *  - Create a new question (POST)
 *  - Edit Question (UPDATE/POST)
 *  - View all Quizes (GET)
 */

const createQuestion = require("./createQuestion");
const findAllQuizzes = require("./findAllQuizzes");

module.exports = {
  createQuestion,
  findAllQuizzes
};