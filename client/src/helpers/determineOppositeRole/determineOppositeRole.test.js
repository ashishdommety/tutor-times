import determineOppositeRole from "./determineOppositeRole";

describe("Should determine the opposite role of the user", () => {
  test("tutor should return students", () => {
    expect(determineOppositeRole("tutor")).toBe("students");
  })
  test("student should return tutors", () => {
    expect(determineOppositeRole("student")).toBe("tutors");
  })
})