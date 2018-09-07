const router = require('express').Router();

const tutorController = require("../controllers/tutor");

module.exports = router
  .get("/next-class", tutorController.nextClass)
  .get("/get-students", tutorController.allStudents)
  .get("/get-students/:id", tutorController.oneStudent)
  .get("/get-students/:id/notes", tutorController.studentNotes)

