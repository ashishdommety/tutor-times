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

module.exports = {
  nextClass: nextClass
}
