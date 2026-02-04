import { reverseString } from "./reverse-string";

describe("reverseString", () => {
  test("reverse single word.", () => {
    expect(reverseString("string")).toEqual("gnirts");
  });

  test("reverse multiple word.", () => {
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });

  test("reverse multiple word.", () => {
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });

  test("works with numbers and punctuation.", () => {
    expect(reverseString("h3llo world!")).toEqual("!dlrow oll3h");
  });

  test("works with blank strings.", () => {
    expect(reverseString("")).toEqual("");
  });
});
