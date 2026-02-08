import { caesarCipher } from "./caesar-cipher";

describe("caesarCipher", () => {
  test("Wrapping from z to a.", () => {
    expect(caesarCipher("xyz", 3)).toEqual("abc");
  });

  test("Case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toEqual("KhOOr");
  });

  test("Non-alphabetical characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
  });
});
