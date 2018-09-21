const router = require('express').Router();

const classes = require("../controllers/classes");
const associates = require("../controllers/associates");
const notes = require("../controllers/notes");
const profile = require("../controllers/profile");

/*
 * routes with 'temp-done' status, need data from the front-end to be complete. 
 */

module.exports = router
  // profile routes
  .get("/user-data", profile.all) // done
  .get("/user-check", profile.findUser) // temp-done
  .post("/create-user", profile.createUser)
  // classes routes
  .get("/next-class", classes.nextClass)
  .get("/get-all-classes", classes.all) // done
  .get("/my-classes", classes.userClasses) // temp-done
  .post("/schedule-class", classes.createClass)
  // associates routes
  .get("/get-associates", associates.all)
  .get("/user-associates", associates.userAssociates)
  // note routes
  .get("/get-notes", notes.userNotes); // temp-done (needs data from front-end)

