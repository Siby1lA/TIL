const fn = require("./fn");

// toBe
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
  expect(fn.add(2, 3)).toBe(5);
});

// toEqual
// toStrictEqual
test("이름과 나이를 전달 받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("mike", 30)).toEqual({
    name: "mike",
    age: 30,
  });
});
test("이름과 나이를 전달 받아서 객체를 반환해줘", () => {
  expect(fn.makeUser("mike", 30)).toStrictEqual({
    name: "mike",
    age: 30,
  });
});

// toBeNull
// toBeUndefined
// toBeDefined
test("null은 null", () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy
test("0은 false", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("비어있지 않은 문자열은 true", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});

// toBeGreaterThan 크다
// toBeGraterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다

test("ID는 10자 이하", () => {
  const id = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  expect(pw.length).toBe(4);
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});

// 값이 근사치면 트루 toBeCloseTo
test("0.1 더하기 0.4", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// 문자열에 특정 요소가 있는지 확인 toMatch
test("Hello World에 e라는 글자가 있나", () => {
  expect("Hello World").toMatch(/e/);
});

// 배열에 특정 요소가 있는지 확인 toContain
test("유저 리스트에 mike가 있나", () => {
  const user = "mike";
  const userList = ["tom", "mike", "kai"];
  expect(userList).toContain(user);
});

test("에러남", () => {
  expect(() => fn.throwErr()).toThrow();
});
test("에러남", () => {
  expect(() => fn.throwErr()).toThrow("xx");
});
