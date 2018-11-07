module.exports = function(role){
  console.log(role);
  return role === "tutor" ? "students" : "tutors";
};