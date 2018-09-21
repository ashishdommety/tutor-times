const router = require('express').Router();

const classes = require("../controllers/classes");
const associates = require("../controllers/associates");
const notes = require("../controllers/notes");
const profile = require("../controllers/profile");

module.exports = router
  .get("/user-data", profile.all) // done
  .get("/user-check", profile.findUser)
  .get("/next-class", classes.nextClass)
  .get("/get-associates", associates.all)
  .get("/get-all-classes", classes.all) // done
  .get("/get-notes", notes.userNotes) // temp-done (needs data from front-end)
  .get("/user-associates", associates.userAssociates);
  // .get("/get-associates/:id/notes", tutorController.studentNotes)

