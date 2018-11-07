const determineOppositeRole = require("./determineOppositeRole");

describe("Returns the opposite role", () => {
  test("tutor should return 'students' ", () =>{
    expect(determineOppositeRole("tutor")).toBe("students");
  })
  test("student should return 'tutors'", () => {
    expect(determineOppositeRole("student")).toBe("tutors");
  })
})