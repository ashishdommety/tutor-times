const router = require('express').Router();

const classes = require("../controllers/classes");
const associates = require("../controllers/associates");

module.exports = router
  .get("/next-class", classes.nextClass)
  .get("/get-associates", associates.all)
  // .get("/get-associates/:id", tutorController.oneStudent)
  // .get("/get-associates/:id/notes", tutorController.studentNotes)

