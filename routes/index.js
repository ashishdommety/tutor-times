const router = require('express').Router();

const tutorController = require("../controllers");

module.exports = router
  .get("/next-class", tutorController.nextClass)
  .get("/get-students", tutorController.allStudents)
  .get("/get-students/:id", tutorController.getOneStudent)
  .get("/get-students/:id/notes", tutorController.getStudentNotes)

