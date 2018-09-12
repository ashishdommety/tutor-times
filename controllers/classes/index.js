/*
  Controllers include:
    - schedule class - CREATE
    - get next class - READ
    - reschedule class - UPDATE
    - class done - UPDATE
    - cancel class - DELETE
*/

const nextClass = require("./nextClass");

module.exports = {
  nextClass: nextClass
}
