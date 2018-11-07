import convertTitleToPath from "./convertTitleToPath";

describe("convert titles to paths", () => {
  test("Simple Math to simple-math", () => {
    expect(convertTitleToPath("Simple Math")).toBe("simple-math");
  })
  test("Complex Math to complex-math", () => {
    expect(convertTitleToPath("Complex Math")).toBe("complex-math");
  })
  test("Pokemon to pokemon", () => {
    expect(convertTitleToPath("Pokemon")).toBe("pokemon");
  })
})