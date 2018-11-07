// @flow
module.exports = function(role: string) {
  console.log(role);
  return role === "tutor" ? "students" : "tutors";
};
