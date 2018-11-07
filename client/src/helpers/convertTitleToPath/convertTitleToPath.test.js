const convertTitleToPath = require("./convertTitleToPath");

describe("Convert Quiz Titles to Paths", () => {
  test("Convert 'Simple Math' to 'simple-math", () => {
    expect(convertTitleToPath("Simple Math")).toBe("simple-math");
  });
  test("Convert 'Complex Math' to 'complex-math'", () => {
    expect(convertTitleToPath("Complex Math")).toBe("complex-math");
  });
});
