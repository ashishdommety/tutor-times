const determineOppositeRole = (role) =>{
  return role === "tutor" ? "students" : "tutors";
}

export default determineOppositeRole;