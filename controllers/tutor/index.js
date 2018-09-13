/* 
  All of these controller functions are placeholders and are meant to be used for the Tutor View.
  They are meant to be re-factored to include database calls.
*/

const getNextClass = require('./nextClass');
const getAllStudents = require('./allStudents');
const getOneStudent = require('./oneStudent');
const getStudentNotes = require('./studentNotes');

module.exports = {
  nextClass: getNextClass,
  allStudents: getAllStudents,
  oneStudent: getOneStudent,
  studentNotes: getStudentNotes
}