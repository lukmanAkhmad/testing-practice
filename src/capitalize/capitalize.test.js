const capitalize = require("./capitalize");

describe("capitalize", () => {
  test("Capitalized the first character.", () => {
    expect(capitalize("string")).toEqual("String");
  });

  test("Capitalized the first character with sentece.", () => {
    expect(capitalize("the string")).toEqual("The string");
  });
});
