const router = require('express').Router();

const tutorController = require("../controllers/tutor");

module.exports = router
  .get("/next-class", tutorController.nextClass)
  .get("/get-associates", tutorController.allStudents)
  .get("/get-associates/:id", tutorController.oneStudent)
  .get("/get-associates/:id/notes", tutorController.studentNotes)

