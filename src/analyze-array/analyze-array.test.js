import { analyzeArray } from "./analyze-array";

describe("analyzeArray", () => {
  test("Analyze Array", () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);

    expect(object).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("Work's with empty Array.", () => {
    const object = analyzeArray([]);

    expect(object).toEqual("Array is empty");
  });
});
