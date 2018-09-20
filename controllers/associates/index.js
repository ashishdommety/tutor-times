/* Controller Functionality:
      - view all tutors/students - READ
      - view one student/tutor profile - READ
*/

const allAssociates = require('./allAssociates');
const userAssociates = require('./userAssociates');

module.exports = {
      all: allAssociates,
      userAssociates
}