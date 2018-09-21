/*
  Controllers include:
    - schedule class - CREATE
    - get next class - READ - done
    - get scheduled classes - READ
    - reschedule class - UPDATE
    - class done - UPDATE
    - cancel class - DELETE
*/

const nextClass = require("./nextClass");
const allClasses = require("./allClasses");
const userClasses = require("./usersClasses");

module.exports = {
  nextClass: nextClass,
  all: allClasses,
  userClasses
}
