const fn = require("./fn");

test("1은 1.", () => {
  expect(1).toBe(1);
});

test("2더하기 3은 5", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3더하기 3은 5가 아님", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

test("2더하기 3은 5", () => {
  expect(fn.add(2, 3)).toEqual(5);
});
