import { add, subtract, divide, multiply } from "./calculator";
describe("calculator", () => {
  test("add.", () => {
    expect(add(1, 1)).toEqual(2);
  });

  test("subtract.", () => {
    expect(subtract(100, 2)).toEqual(98);
  });

  test("divide.", () => {
    expect(divide(8, 2)).toEqual(4);
  });

  test("multiply.", () => {
    expect(multiply(5, 5)).toEqual(25);
  });
});
